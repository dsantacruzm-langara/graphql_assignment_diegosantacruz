import { useState } from "react";
import { Card } from "antd";

import { useQuery } from "@apollo/client";

import { List } from "antd";

import { GET_ALL_PERSONS_FROM_DB } from "../../../Queries/queries";
import CarCard from "./CarCard";

const getStyles = () => ({
  cardLayout: {
    width: "500px",
  },
  title: {
    fontSize: "24px",
    padding: "15px",
    marginBottom: "50px",
  },
});

const PersonCard = (props) => {
  const styles = getStyles();

  const [id] = useState(props.id);
  const [firstName] = useState(props.firstName);
  const [lastName] = useState(props.lastName);
  const [cars] = useState(props.cars)

  console.log(cars)

  return (
    <Card style={styles.cardLayout} title={`${firstName} ${lastName}`}>
      <List style={styles.listLayout} dataSource={cars} renderItem={(item) => (
          <List.Item key={id}>
            <CarCard
              key={item.id}
              carId={item.id}
              year={item.year}
              make={item.make}
              model={item.model}
              price={item.price}
              ownerId={item.personId}
            />
          </List.Item>

      )}>
      </List>
    </Card>
  );
};

export default PersonCard;
