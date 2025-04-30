import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/slice/productsSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Product from "../Product/Product";
import { motion } from "framer-motion";
import { cartCalling } from "../../app/slice/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const fetch = useCallback(() => {
    dispatch(fetchProducts());
    dispatch(cartCalling());
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="container mt-14 flex flex-col justify-center">
      <p className="text-4xl font-bold text-center mb-10">Our Products</p>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              height={400}
              baseColor="#e0e0e0"
              highlightColor="#444"
              className="rounded-lg"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-500 text-center text-lg mt-4">{error}</p>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No products found</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Product product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
