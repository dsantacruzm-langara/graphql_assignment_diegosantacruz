import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";

import { GET_ALL_PERSONS_FROM_DB, ADD_CAR_TO_DB } from "../Queries/queries";
import Dropdown from "./listing/OwnerDropdown";

const AddCar = (props) => {
  const [id] = useState(uuidv4());
  const [addCarMutation] = useMutation(ADD_CAR_TO_DB);
  const { loading, error, data } = useQuery(GET_ALL_PERSONS_FROM_DB);

  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownValue, setDropdownValue] = useState({});

  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      setDropDownList(
        data.getAllPersonsFromDb.map(({ id, firstName, lastName }) => {
          return { value: id, label: `${firstName} ${lastName}` };
        })
      );
      setDropdownValue(dropDownList[0]);
    }
  }, [data]);

  //Execute AddCar mutation
  const onFinish = (values) => {
    const { year, make, model, price } = values;

    addCarMutation({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId: "1",
      },
    });
  };

  return (
    <div>
      <h2>Add Car</h2>
      <Form
        name="add-car-form"
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

        <Form.Item name="personId" rules={[{ required: true, message: "Pick Owner" }]}>
          <Dropdown
            onChange={setDropdownValue}
            dropDownOptionList={dropDownList}
            defaultValue={dropDownValue}
          />
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
