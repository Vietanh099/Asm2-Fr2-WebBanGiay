import React from "react";
import { useGetProductsQuery } from "@/api/product";
import { Card, Spin } from "antd";
import "@/index.css"; // Import CSS file for custom styles

const Dashboard = () => {
    const { data, isLoading, isError } = useGetProductsQuery();

    if (isLoading) {
        return <Spin className="loading-spinner" />;
    }

    if (isError) {
        return <p>Oops, something went wrong...</p>;
    }

    if (!data || data.length === 0) {
        return <p>No products found.</p>;
    }

    const totalProducts = data.length;
    const totalPrice = data.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = totalPrice / totalProducts;

    return (
        <div className="product-stats-container">
            <h1 className="font-bold">Thống kê sản phẩm:</h1>
            <Card className="stats-card">
                <p>Tổng số sản phẩm: {totalProducts}</p>
                <p>Giá trung bình: {averagePrice.toFixed(2)}</p>
            </Card>
        </div>
    );
};

export default Dashboard;