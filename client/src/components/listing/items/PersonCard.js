import { useState } from "react";

import { Card } from "antd";
import { List } from "antd";

import CarCard from "./CarCard";
import RemovePerson from "../../Button/RemovePerson";

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

  // const [id] = useState(props.id);
  const [firstName] = useState(props.firstName);
  const [lastName] = useState(props.lastName);
  const [cars] = useState(props.cars)

  return (
    <Card style={styles.cardLayout} title={`${firstName} ${lastName}`}>
      <List style={styles.listLayout} dataSource={cars} renderItem={(item) => (
          <List.Item>
            <CarCard
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
      <RemovePerson id={props.id}/>
    </Card>
  );
};

export default PersonCard;
