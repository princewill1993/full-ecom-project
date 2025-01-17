import order from "../../models/orderModel/orderModel.js";

async function createCustomerOrder(req, res) {
  const { reference, customerDeliveryInfo, userCartSummary, cartItems } =
    req.body;

  if (reference === false) {
    res.statust(400).json({ message: "Transaction reference missing" });
  }

  if (customerDeliveryInfo === false) {
    res.statust(400).json({ message: "Customer delivery info incomplete" });
  }
  if (!userCartSummary) {
    res.statust(400).json({ message: "order summary not provided" });
  }
  if (!cartItems) {
    res.statust(400).json({ message: "User cartitems missing" });
  }

  try {
    const orderCreated = await order.create({
      reference: {
        reference: reference.transaction,
        message: reference.message,
        status: reference.status,
        trxref: reference.trxref,
      },
      customerDeliveryInfo: customerDeliveryInfo,
      userCartSummary: userCartSummary,
      cartItems: cartItems,
    });

    res
      .status(200)
      .json({ status: "success", data: "order created successfully" });
  } catch (error) {
    res.status(400).json({ status: "failed", data: error });
  }
}

export { createCustomerOrder };
