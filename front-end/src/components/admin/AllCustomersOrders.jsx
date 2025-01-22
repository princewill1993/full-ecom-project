import React from "react";
import moment from "moment";
import axios from "axios";
import { formatCurrency, serverUrl } from "../../utils/helper";
import { Link } from "react-router";

const AllCustomersOrders = () => {
  const [customersOrders, setCustomersOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  async function getCustomersOrders() {
    try {
      const response = await axios.get(`${serverUrl}/order/all-orders`);
      setCustomersOrders(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getCustomersOrders();
  }, []);

  console.log(customersOrders);

  return (
    <section className="max-w-[1100px] mx-auto py-16 px-4">
      <table className="w-full text-left">
        <thead>
          <tr className=" text-green-800 text-lg">
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Order status</th>
            <th>Total amount</th>
            <th>Total Items</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {customersOrders.map((item) => {
            return (
              <tr
                className="text-gray-500 hover:bg-gray-100 hover:text-black font-bold cursor-pointer"
                key={item._id}
              >
                <td className="py-4">
                  {moment(new Date(item.createdAt)).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
                <td className="py-4">
                  {item.customerDeliveryInfo.customerName}
                </td>
                <td className="py-4">{item.customerDeliveryInfo.email}</td>
                <td className="py-4">{item.orderStatus}</td>
                <td className="py-4">
                  {formatCurrency(item.userCartSummary.totalAmount)}
                </td>
                <td className="py-4">{item.userCartSummary.totalCartItems}</td>
                <td className="py-4">
                  <Link to={`/admin/${item._id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default AllCustomersOrders;
