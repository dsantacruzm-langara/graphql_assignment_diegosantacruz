import { useQuery } from "@apollo/client";

import { List } from "antd";

import { GET_ALL_PERSONS_FROM_DB } from "../../Queries/queries";
import PersonCard from "./items/PersonCard";

const getStyles = () => ({
  listLayout: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    padding: "15px",
    marginBottom: "50px",
  },
});

const PersonsList = () => {
  const styles = getStyles();

  const { loading, error, data } = useQuery(GET_ALL_PERSONS_FROM_DB);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <List style={styles.listLayout}>
      {data.getAllPersonsFromDb.map(({ id, firstName, lastName, cars }) => (
        <List.Item key={id}>
          <PersonCard
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            cars={cars}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default PersonsList;
