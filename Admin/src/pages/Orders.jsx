import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(
        backendUrl + "/api/v1/order/list",
        {},
        { headers: { token } }
      );
      console.log(response.data.orders);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="">
      <h3>Order Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div key={index} className="">
            <img src={assets.parcel_icon} alt="" className="" />
            <div className="">
              <div className="">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p key={index}>
                        {" "}
                        {item.name} X {item.quantity} <span>{item.size}</span>
                        <span>, </span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={index}>
                        {" "}
                        {item.name} X {item.quantity} <span>{item.size}</span>
                        <span>, </span>
                      </p>
                    );
                  }
                })}
              </div>
              <p>{order.address.firstName + " " + order.address.lastName}</p>
              <div className="">
                <p className="">{order.address.street + ", "}</p>
                <p className="">
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div className="">
                <p className="">Items : {order.items.length}</p>
                <p className="">Method : {order.paymentMethod}</p>
                <p className="">Payment : {order.payment ? "Done" : "Pending"}</p>
                <p className="">Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p>{currency} {order.amount}</p>
            <select>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
