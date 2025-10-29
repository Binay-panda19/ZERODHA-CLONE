import mongoose, { Schema } from "mongoose";

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

export const Order = mongoose.model("Order", OrdersSchema);
