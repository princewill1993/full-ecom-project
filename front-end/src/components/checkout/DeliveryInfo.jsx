import { Input } from "antd";
import React from "react";

function DeliveryInfo({
  customerName,
  email,
  phoneNumber,
  deliveryAddress,
  handleInput,
}) {
  return (
    <section>
      <h3 className="text-4xl">Complete your order</h3>
      <p className="text-lg text-gray-500 font-light">
        Enter your delivery informtion to make payment and confirm your order
      </p>
      <form className="flex flex-col gap-6 my-8 bg-gray-50 p-2 md:p-18">
        <Input
          name="customerName"
          value={customerName}
          onChange={handleInput}
          placeholder="Your name"
          size="large"
        />
        <Input
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="Your Email address"
          size="large"
        />
        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInput}
          placeholder="Your Phone num"
          size="large"
        />
        <Input
          name="deliveryAddress"
          value={deliveryAddress}
          onChange={handleInput}
          placeholder="Your Delivery address"
          size="large"
        />
      </form>
    </section>
  );
}

export default DeliveryInfo;
