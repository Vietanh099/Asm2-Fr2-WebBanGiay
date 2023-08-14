import { useAddProductMutation } from "@/api/product";
import { pause } from "@/utils/pause";
import {Form, message, Input, Button} from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


type FieldType ={
    name?: string,
    price?: string,
    img?:string,
    desc?:string
}
const AdminProductAdd = () => {

    const[addProduct,{isLoading:isAddLoading}] = useAddProductMutation();
    const [form] = Form.useForm();
    const [ messageApi,contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = (values:any) =>{
        addProduct(values)
        .unwrap()
            .then(async () => {
                form.resetFields();
                messageApi.open({
                    type: "success",
                    content: "Thêm sản phẩm thành công. Chuyển trang sau 3s",
                });
                await pause(3000);
                navigate("/admin/product");
            });
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

  return (
    <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            {contextHolder}

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
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Giá sản phẩm" name="price">
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Ảnh sản phẩm" name="img">
                    <Input   />
                </Form.Item>

                <Form.Item<FieldType> label="Mô tả sản phẩm" name="desc">
                    <Input   />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isAddLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Thêm"
                        )}
                    </Button>
                </Form.Item>
            </Form>
        </>
  )
}

export default AdminProductAdd
