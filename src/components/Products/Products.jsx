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
  let productsData = [
    {
      id: "2",
      category: "Sofas",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      price: 4000,
      salePercentage: 15,
      title: "Comfortable Sofa Set",
    },
    {
      id: "1",
      category: "Beds",
      image:
        "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?ga=GA1.1.2974258.1730238639&semt=ais_hybrid&w=740",
      price: 5500,
      salePercentage: 10,
      title: "Luxury King Size Bed",
    },
    {
      id: "3",
      category: "Curtains",
      image:
        "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?ga=GA1.1.2974258.1730238639&semt=ais_hybrid&w=740",
      price: 1300,
      salePercentage: 5,
      title: "Elegant Fabric Curtains",
    },
    {
      id: "4",
      category: "Dining Tables",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: 7200,
      salePercentage: 20,
      title: "Modern Dining Table",
    },
    {
      id: "5",
      category: "Wardrobes",
      image:
        "https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-blue-tone_53876-125839.jpg?ga=GA1.1.2974258.1730238639&semt=ais_hybrid&w=740",
      price: 4800,
      salePercentage: 12,
      title: "Spacious Wooden Wardrobe",
    },
    {
      id: "6",
      category: "Carpets",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      price: 850,
      salePercentage: 8,
      title: "Soft Woolen Carpet",
    },
  ];

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
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
