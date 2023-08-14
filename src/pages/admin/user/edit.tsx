
import { pause } from "@/utils/pause";
import { Button, Form, Input, Skeleton, message } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery,useUpdateUserMutation } from "@/api/user";

type FieldType = {
    name?:string ,
    role?: string,
    email?:string,
    img?:string,
    password?:string,
};

const AdminUserEdit = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { idUser } = useParams<{ idUser: string }>();
    const [updateUser, { isLoading: isUpdateLoading }] = useUpdateUserMutation();
    const { data: userData, isLoading: isProductLoading } = useGetUserByIdQuery(
        idUser || ""
    );
    useEffect(() => {
        // lấy dữ liệu từ api và fill vào form
        form.setFieldsValue(userData);
    }, [userData]);
    const onFinish = (values: any) => {
        updateUser({ ...values, id: idUser })
            .unwrap()
            .then(async () => {
                messageApi.open({
                    type: "success",
                    content: "Cập nhật sản phẩm thành công. Chuyển trang sau 3s",
                });
                await pause(3000);
                navigate("/admin/users");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Cập nhật sản phẩm</h2>
            </header>
            {contextHolder}
            {isProductLoading ? (
                <Skeleton />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên tài khoản"
                        name="name"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên sản phẩm" },
                            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label="Email" name="email">
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label="Ảnh " name="img">
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label="Mật khẩu" name="password">
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label="Role" name="role">
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            {isUpdateLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                "Cập nhật"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    );
};

export default AdminUserEdit;