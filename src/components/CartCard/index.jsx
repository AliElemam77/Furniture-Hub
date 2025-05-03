import React from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { deleteFromCart } from "../../app/slice/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <AnimatePresence mode="wait">
      <motion.li
        layout
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, x: 100 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-32 h-32 rounded-sm object-cover"
        />

        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
          {/* Product Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {item.title}
            </h3>
            <dl className="mt-1 text-xs text-gray-600">
              <div>
                <dt className="inline font-medium text-sm">Price:</dt>
                <dd className="inline font-semibold text-sm text-gray-800 ml-1">
                  {item.price} $
                </dd>
              </div>
            </dl>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              defaultValue="1"
              id="Line1Qty"
              className="h-9 w-14 rounded border border-gray-300 bg-white text-center text-sm text-gray-700 shadow-sm focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
            />

            <button
              type="button"
              onClick={() => dispatch(deleteFromCart(item))}
              className=" text-gray-500 transition hover:text-red-600"
              aria-label="Remove item"
            >
              {/* SVG Trash Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9M19.228 5.79l-1.068 13.883A2.25 2.25 0 0115.916 21H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.11 48.11 0 00-3.478-.397m-12 .562a48.11 48.11 0 013.478-.397m7.5 0V4.48a2.25 2.25 0 00-2.09-2.201 51.964 51.964 0 00-3.32 0A2.25 2.25 0 006.5 4.48v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.li>
    </AnimatePresence>
  );
}

export default CartItem;
