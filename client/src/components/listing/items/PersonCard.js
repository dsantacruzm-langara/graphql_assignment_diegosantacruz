import { useState } from "react";
import { Card } from "antd";

import { useQuery } from "@apollo/client";

import { List } from "antd";

import { GET_ALL_CARS_FROM_DB, GET_MANY_CARS_FROM_DB } from "../../../Queries/queries";
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

  const { loading, error, data } = useQuery(GET_ALL_CARS_FROM_DB);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.getManyCarsFromDb);

  return (
    <Card style={styles.cardLayout} title={`${firstName} ${lastName}`}>
      <List style={styles.listLayout}>
            <List.Item key={id}>
              <CarCard
                key={id}
                carId={id}
                year={year}
                make={make}
                model={model}
                price={price}
                ownerId={personId}
              />
            </List.Item>
      </List>
    </Card>
  );
};

export default PersonCard;
