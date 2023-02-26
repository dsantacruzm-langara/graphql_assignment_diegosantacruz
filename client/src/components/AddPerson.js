import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from 'uuid'

import { ADD_PERSON_TO_DB } from "../Queries/queries";

const AddPerson = () => {
  const [id] = useState(uuidv4());
  const [addPersonToDb] = useMutation(ADD_PERSON_TO_DB);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    addPersonToDb({
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
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="i.e. John" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="i.e. Smith" />
        </Form.Item>

        <Form.Item shouldUpdate={true}>
        {/* <Form.Item> */}
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
