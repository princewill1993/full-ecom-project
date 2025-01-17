import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    reference: {
      transaction: String,
      message: String,
      status: String,
      trxref: String,
    },
    customerDeliveryInfo: {
      customerName: String,
      email: String,
      phoneNumber: String,
      deliveryAddress: String,
    },

    userCartSummary: {
      totalAmount: Number,
      totalCartItems: Number,
    },

    cartItems: [
      {
        product_name: String,
        product_id: String,
        product_price: Number,
        product_quantity: Number,
        product_decription: String,
        product_image: String,
      },
    ],
    orderStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const order = new mongoose.model("orders", orderSchema);
export default order;
