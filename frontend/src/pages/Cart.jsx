import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">
        {cartData.map((item, idx) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={idx}
              className="py-4 border-t border-b  text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData?.image[0]}
                  alt={productData?.title || "Product"}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData?.name} ({item.size.toUpperCase()})
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">{currency}{productData?.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input type="text" defaultValue={item.quantity} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 " />
              <img src={assets.bin_icon} alt="" className="cursor-pointer w-4 mr-4 sm:w-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
