import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    // 1️⃣ Try reading from Authorization header
    let token = null;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // 2️⃣ Or from cookie (frontend sends cookies automatically withCredentials)
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // 4️⃣ Find the user
    const user = await User.findById(decoded.id).select(
      "-password -refreshTokens"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Refresh token expired" });
    }

    console.error("Auth middleware error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
