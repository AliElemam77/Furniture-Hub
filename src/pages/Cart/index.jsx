import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import { AnimatePresence } from "framer-motion";
// import { cartCalling, clearCart } from "../../app/slice/cartSlice";
import {  clearCart } from "../../app/slice/cartSlice";

function index() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  // const fetchCart = useCallback(() => {
  //   dispatch(cartCalling());
  // }, []);

  // useEffect(() => {
  //   fetchCart();
  // }, []);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mt-8 flex flex-col gap-y-10">
              {cart.length > 0 ? (
                <AnimatePresence>
                  {cart.map((item) => (
                    <CartCard key={item.id} item={item} />
                  ))}
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="rounded-md bg-red-500 px-4 py-2 text-white"
                    >
                      Clear Cart
                    </button>
                    <p className="text-lg font-semibold">
                      Total:{" "}
                      {cart.reduce((total, item) => total + item.price, 0)} $
                    </p>
                  </div>
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Your cart is empty
                  </h2>
                  <p className="text-gray-500">
                    Add some products to your cart to get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
