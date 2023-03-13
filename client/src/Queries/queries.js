import { gql } from "@apollo/client";

const GET_ALL_PERSONS_FROM_DB = gql`
  {
    getAllPersonsFromDb {
      id
      firstName
      lastName
      cars {
        id
        year
        make
        model
        price
        personId
      }
    }
  }
`;

const GET_ALL_CARS_FROM_DB = gql`
  {
    getAllCarsFromDb {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

const GET_ALL_PERSON_CARS_FROM_DB = gql`
  {
    getAllPersonCarsFromDb {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

const GET_PERSON_FROM_DB = gql`
  query GetPersonFromDb($id: String!) {
    getPersonFromDb(id: $id) {
      id
      firstName
      lastName
      cars {
        id
        year
        make
        model
        price
        personId
      }
    }
  }
`;

const ADD_PERSON_TO_DB = gql`
  mutation AddPersonToDb(
    $id: String!
    $firstName: String!
    $lastName: String!
  ) {
    addPersonToDb(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

const ADD_CAR_TO_DB = gql`
  mutation addCarToDb(
    $id: String!
    $year: String!
    $make: String!
    $model: String!
    $price: String!
    $personId: String!
  ) {
    addCarToDb(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

// export const UPDATE_CONTACT = gql`
//   mutation UpdateContact($id: String!, $firstName: String!, $lastName: String!) {
//     updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
//       id
//       firstName
//       lastName
//     }
//   }
// `

const REMOVE_PERSON = gql`
  mutation RemovePersonFromDb($id: String!) {
    removePersonFromDb(id: $id) {
      id
    }
  }
`;

const REMOVE_CAR = gql`
  mutation RemoveCarFromDb($id: String!) {
    removeCarFromDb(id: $id) {
      id
    }
  }
`;

export {
  GET_ALL_PERSONS_FROM_DB,
  GET_ALL_CARS_FROM_DB,
  GET_ALL_PERSON_CARS_FROM_DB,
  GET_PERSON_FROM_DB,
  ADD_PERSON_TO_DB,
  ADD_CAR_TO_DB,
  REMOVE_PERSON,
  REMOVE_CAR,
};
