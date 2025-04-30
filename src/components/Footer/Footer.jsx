import React from "react";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        {/* Heading, description, and button */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Design Your Furniture, Your Way
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-gray-500">
            Explore our wide range of modern furniture and home textiles.
            Customize every piece to match your style and space.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-orange-700 px-12 py-3 text-sm font-medium text-orange-700 transition hover:bg-orange-700 hover:text-white focus:outline-none focus:ring"
          >
            Browse Collection
          </a>
        </div>

        {/* Grid with three sections */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 lg:grid-cols-3 lg:gap-32">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Furniture Hub</p>
            <p className="mt-4 text-sm text-gray-700">
              Premium furniture and home decor solutions. We bring comfort and
              style together to elevate your living space.
            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Services</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Custom Furniture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Home Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Online Consultation
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Contact</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          &copy; 2025 Furniture Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
