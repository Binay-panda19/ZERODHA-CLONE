import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link
          to={"/dashboard"}
          className="btn"
          onClick={() => toast.info("Place an order in the watchlist")}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
