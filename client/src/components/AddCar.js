import { useState } from "react";

import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_PERSON_TO_DB } from "../Queries/queries";

const AddCar = () => {
  const [id] = useState("4");
  const [addCarMutation] = useMutation(ADD_PERSON_TO_DB);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    addCarMutation({
      variables: {
        id,
        firstName,
        lastName,
      },
    });
  };

  return (
    <div>
      <h2>Add Car</h2>
      <Form
        name="add-contact-form"
        form={form}
        layout="inline"
        onFinish={onFinish}
        size="large"
        style={{ marginBottom: "40px" }}
      >
        <Form.Item name="year" rules={[{ required: true, message: "Year" }]}>
          <Input placeholder="Year" />
        </Form.Item>

        <Form.Item name="make" rules={[{ required: true, message: "Make" }]}>
          <Input placeholder="Make" />
        </Form.Item>

        <Form.Item name="model" rules={[{ required: true, message: "Model" }]}>
          <Input placeholder="Model" />
        </Form.Item>

        <Form.Item name="price" rules={[{ required: true, message: "Price" }]}>
          <Input placeholder="Price $" />
        </Form.Item>

        <Form.Item shouldUpdate={true}>
          {() => (
            <Button type="primary" htmlType="submit">
              Add Car
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCar;
