import React, { useState } from "react";
import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { Button, Popconfirm, Skeleton, Table, message, Pagination } from "antd";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const { data, isLoading: isProductLoading } = useGetProductsQuery();
  const [removeProduct] = useRemoveProductMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const filteredData = data?.filter((item: any) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalItems = filteredData?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = filteredData?.slice(startIndex, endIndex);

  const dataSource = visibleItems?.map((item: any) => ({
    key: item.id,
    name: item.name,
    price: item.price,
    img: item.img,
    desc: item.desc,
  }));

  const columns = [
    {
      title: "Stt",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (imgURL: string) => (
        <img src={imgURL} alt="Product" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      title: "Mô tả sản phẩm",
      dataIndex: "desc",
      key: "desc",
    },
    {
      render: ({ key: id }: { key: number | string }) => (
        <div>
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có muốn xóa không??"
            onConfirm={() => {
              removeProduct(id)
                .unwrap()
                .then(() => {
                  messageApi.open({
                    type: "success",
                    content: "Xóa sản phẩm thành công",
                  });
                });
            }}
            okText="Có"
            cancelText="Không"
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
          <Button type="primary" danger className="ml-2">
            <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
          </Button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <Button type="primary" danger>
          <Link to="/admin/product/add">Thêm sản phẩm</Link>
        </Button>
      </header>
      <div>
        {/* {contextHolder} */}
        {isProductLoading ? (
          <Skeleton />
        ) : visibleItems.length === 0 ? (
          <p>No matching products found.</p>
        ) : (
          <Table dataSource={dataSource} columns={columns} />
        )}
        <div className="pagination">
          
          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;