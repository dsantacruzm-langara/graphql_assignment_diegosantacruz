import { useMutation } from "@apollo/client";

import {
  REMOVE_PERSON,
  GET_ALL_PERSONS_FROM_DB,
} from "../../Queries/queries";

import { DeleteOutlined } from "@ant-design/icons";

const RemovePerson = ({ id }) => {
  const [removePerson] = useMutation(REMOVE_PERSON);

  const removeHandler = () => {
    removePerson({
      variables: {
        id: id,
      },
      update: (cache, { data: { removePerson } }) => {
        const { getAllPersonsFromDb } = cache.readQuery({
          query: GET_ALL_PERSONS_FROM_DB,
        });

        cache.writeQuery({
          query: GET_ALL_PERSONS_FROM_DB,
          data: { getAllPersonsFromDb: getAllPersonsFromDb.filter(person => 
            id !== person.id) },
        });
      },
    });
  };

  return <DeleteOutlined key='delete' onClick={removeHandler} style={{ color: "red" }}/>;
};

export default RemovePerson;
