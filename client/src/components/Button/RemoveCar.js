import { useMutation } from "@apollo/client";

import {
  REMOVE_CAR,
  GET_ALL_PERSON_CARS_FROM_DB,
} from "../../Queries/queries";

import { DeleteOutlined } from "@ant-design/icons";

const RemoveCar = ({ id }) => {
  const [removeCar] = useMutation(REMOVE_CAR);

  const removeHandler = () => {
    removeCar({
      variables: {
        id: id,
      },
      update: (cache, { data: { removeCar } }) => {
        const { getAllPersonCarsFromDb } = cache.readQuery({
          query: GET_ALL_PERSON_CARS_FROM_DB,
        });

        cache.writeQuery({
          query: GET_ALL_PERSON_CARS_FROM_DB,
          data: { getAllPersonCarsFromDb: getAllPersonCarsFromDb.filter(car => 
            id !== car.id) },
        });
      },
    });
  };

  return <DeleteOutlined key='delete' onClick={removeHandler} style={{ color: "red" }}/>;
};

export default RemoveCar;
