import { useState } from "react";

import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_PERSON_TO_DB } from "../Queries/queries";

const AddPerson = () => {
  const [id] = useState("4");
  const [addPersonMutation] = useMutation(ADD_PERSON_TO_DB);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    addPersonMutation({
      variables: {
        id,
        firstName,
        lastName,
      },
    });
  };

  return (
    <div>
    <h2>Add Person</h2>
      <Form
        name="add-contact-form"
        form={form}
        layout="inline"
        onFinish={onFinish}
        size="large"
        style={{ marginBottom: "40px" }}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="i.e. John" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="i.e. Smith" />
        </Form.Item>

        <Form.Item shouldUpdate={true}>
          {() => (
            <Button type="primary" htmlType="submit">
              Add Contact
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPerson;
