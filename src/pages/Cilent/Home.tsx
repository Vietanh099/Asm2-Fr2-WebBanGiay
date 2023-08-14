import React, { useState } from "react";
import { useGetProductsQuery } from "@/api/product";

const HomePage = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const itemsPerPage = 8; // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }
  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  // Tính toán số trang dựa vào số sản phẩm và số sản phẩm trên mỗi trang
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Tính vị trí bắt đầu và kết thúc của danh sách sản phẩm dựa vào trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Cắt danh sách sản phẩm theo vị trí bắt đầu và kết thúc
  const visibleProducts = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <section>
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>
        </header>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <li
              key={product.id}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <a href="#" className="group block overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center font-bold uppercase">
                    {product.name}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only">Regular Price</span>

                    <span className="block text-center tracking-wider text-gray-900 font-semibold text-lg mb-2">
                      {product.price} $
                    </span>
                  </p>

                  <button className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                    Add to Cart
                  </button>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border-r border-gray-300 bg-white rounded-l-md hover:bg-gray-100 focus:outline-none"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                } focus:outline-none`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border-l border-gray-300 bg-white rounded-r-md hover:bg-gray-100 focus:outline-none"
            >
              Next
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
