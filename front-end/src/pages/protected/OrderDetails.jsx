import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { serverUrl } from "../../utils/helper";
import moment from "moment";

function OrderDetails() {
  const params = useParams();
  const [orderInfromation, setOrderInfromation] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getOrderDetails() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${serverUrl}/order/order-info/${params.order_id}`
      );
      setOrderInfromation(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, []);

  if (loading === true) {
    return (
      <div>
        <h1 className="text-center py-60 animate-pulse text-gray-600 text-5xl tracking-wider">
          Loading order details...
        </h1>
      </div>
    );
  }
  console.log(orderInfromation);

  return (
    <div className="max-w-[1000px] max-auto p-4 py-16">
      <p className="text-2xl font-medium mb-3">
        {" "}
        {moment(new Date(orderInfromation.createdAt)).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <h3 className="bg-green-800 text-white w-fit ">
        {orderInfromation?.orderStatus}
      </h3>

      <div>
        <h2>Transaction details</h2>
        <p>
          <strong>Paystack Transaction Id</strong>
          {orderInfromation.reference.trxref}
        </p>
        <p>
          <strong> Transaction status</strong>
          {orderInfromation.reference.status}
        </p>
        <p>
          <strong> Payment: </strong>
          {orderInfromation.reference.message}
        </p>
      </div>

      <div>
        <h2>Customer information </h2>
        <p>
          <strong>Name:</strong>
          {orderInfromation.customerDeliveryInfo.customerName}
        </p>
        <p>
          <strong>Email:</strong>
          {orderInfromation.customerDeliveryInfo.email}
        </p>
        <p>
          <strong>Phone Number:</strong>
          {orderInfromation.customerDeliveryInfo.phoneNumber}
        </p>
        <p>
          <strong>Delivery address:</strong>
          {orderInfromation.customerDeliveryInfo.deliveryAddress}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderInfromation.cartItems.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.product_id}</td>
                <td>
                  <div>
                    <img src={item.product_image} alt={item.product_name} />
                  </div>
                </td>
                <td>{item.product_name}</td>
                <td>{item.product_price}</td>
                <td>{item.product_quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
