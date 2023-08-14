import React, { useState } from "react";
import { Button, Popconfirm, Skeleton, Table, message } from "antd";
import { Link } from "react-router-dom";
import { useGetusersQuery, useRemoveUserMutation } from "@/api/user";



const AdminUser = () => {
  const { data, isLoading: isProductLoading } = useGetusersQuery();
  const [removeUser] = useRemoveUserMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const [searchText, setSearchText] = useState("");
  

  const filteredData = data?.filter((item: any) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const dataSource = filteredData?.map((item: any) => ({
    key: item.id,
    name: item.name,
    role: item.role,
    email:item.email,
    img:item.img,
    password:item.password,
  }));

  const columns = [
    {
      title: "Stt",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
    },
    {
    title: "Role",
    dataIndex: "role",
    key: "role",
    },
    {
      title: "Avatar",
      dataIndex: "img",
      key: "img",
      render: (imgURL: string) => (
        <img src={imgURL} alt="" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      render: ({ key: id }: { key: number | string }) => (
        <div>
          <Popconfirm
            title="Xóa tài khoản"
            description="Bạn có muốn xóa không??"
            onConfirm={() => {
              removeUser(id)
                .unwrap()
                .then(() => {
                  messageApi.open({
                    type: "success",
                    content: "Xóa tài khoản thành công",
                  });
                });
            }}
            okText="Có"
            cancelText="Không"
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
          <Button type="primary" danger className="ml-2">
            <Link to={`/admin/user/${id}/edit`}>Sửa</Link>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Quản lý tài khoản</h2>
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
      </header>
      {contextHolder}
      {isProductLoading ? (
        <Skeleton />
      ) : filteredData.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
  );
};

export default AdminUser;
