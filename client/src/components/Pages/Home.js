import PersonsList from "../listing/PersonsList";
import Title from "../Title";
import AddPerson from "../AddPerson";
import AddCar from "../AddCar";

const Home = () => {
  return (
    <>
      <Title />
      <AddPerson />
      <AddCar />
      <PersonsList />
    </>
  );
};

export default Home;
