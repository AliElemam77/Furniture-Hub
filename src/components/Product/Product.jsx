import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slice/cartSlice";
import { Link } from "react-router-dom";

function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <Link className="group relative block overflow-hidden rounded-md drop-shadow-md">
      <div className="absolute font-bold end-4 top-4 z-10 rounded-md bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        - {product.salePercentage} %
      </div>

      <img
        src={product.image}
        alt="product image"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
          {product.category}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {product.title}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">{product.price} $</p>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // dispatch(addToCart(product));
            dispatch(addToCart(product));
          }}
          className="block mt-5 text-white w-full rounded-sm bg-yellow-600 p-4 text-sm font-medium transition hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default Product;
