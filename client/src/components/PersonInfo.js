import { useState } from "react";

import { Link } from "react-router-dom";
import { Card, List } from "antd";
import CarCard from "./listing/items/CarCard";

const getStyles = () => ({
  card: {
    width: "100%",
  },
  more: {
    marginTop: "20px",
  },
});

const PersonInfo = (props) => {
  const styles = getStyles();

  const [firstName] = useState(props.data.getPersonFromDb.firstName);
  const [lastName] = useState(props.data.getPersonFromDb.lastName);
  const [cars] = useState(props.data.getPersonFromDb.cars);

  return (
    <>
      <Card
        style={styles.card}
        title={`${firstName} ${lastName}`}
      >
        <List
          style={styles.listLayout}
          dataSource={cars}
          renderItem={(item) => (
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
          )}
        ></List>

        <Link to={`/`} style={styles.more}>
          Back to Home
        </Link>
      </Card>
    </>
  );
};

export default PersonInfo;
