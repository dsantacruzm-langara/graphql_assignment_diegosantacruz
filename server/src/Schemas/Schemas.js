import { personsDb, carsDb } from "../db/db.js";

import { findOne, findManyCars } from "../util/util.js";

const typeDefs = `#graphql
  type Person {
    id: String,
    firstName: String,
    lastName: String,
    cars: [Car]
  }

  type Car {
    id: String,
    year: String,
    make: String,
    model: String,
    price: String,
    personId: String,
  }

  type Query {
    getAllPersonsFromDb: [Person]
    getAllCarsFromDB: [Car]

    getAllPersonCarsFromDB(id: String): [Car]

    getPersonFromDb(id: String): Person
    getCarFromDb(id: String): Car 
  }

  type Mutation {
    addPersonToDb(id: String!, firstName: String!, lastName: String!): Person
    addCarToDb(id: String!, year: String!, make: String!, model: String!, price: String!, personId: String!): Car

    updatePersonInDb(id: String!, firstName: String!, lastName: String!): Person
    updateCarInDb(id: String!, year: String!, make: String!, model: String!, price: String!, personId: String!): Car

    removePersonFromDb(id: String!): [Person]
    removeCarFromDb(id: String!): [Car]
  }
`;

const resolvers = {
  ///////////////QUERY////////////////
  Query: {
    //Get All
    getAllPersonsFromDb: () => {
      return personsDb.map(person => {
        person.cars = carsDb.filter(car => car.personId === person.id)
        return person;
      })
    },

    getAllCarsFromDB: () => carsDb,

    getAllPersonCarsFromDB: (root, args) => {
      return findManyCars(carsDb, args.id);
    },

    //Get One By Id
    getPersonFromDb: (root, args) => {
      return findOne(personsDb, args.id);
    },

    getCarFromDb: (root, args) => {
      return findOne(carsDb, args.id);
    },
  },
  ///////////////MUTATION////////////////
  Mutation: {
    //Add One To DB
    addPersonToDb: (root, args) => {
      const newPerson = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
      };

      personsDb.push(newPerson);

      return newPerson;
    },
    addCarToDb: (root, args) => {
      const newCar = {
        id: args.id,
        year: args.year,
        make: args.make,
        model: args.model,
        price: args.price,
        personId: args.personId,
      };

      carsDb.push(newCar);

      return newCar;
    },
    //Update One To DB
    updatePersonInDb: (root, args) => {
      const personToUpdate = findOne(personsDb, args.id);
      if (!personToUpdate) throw new Error(`No person with id ${args.id}`);

      personToUpdate.firstName = args.firstName;
      personToUpdate.lastName = args.lastName;

      return personToUpdate;
    },
    updateCarInDb: (root, args) => {
      const carToUpdate = findOne(carsDb, args.id);
      if (!carToUpdate) throw new Error(`No car with id ${args.id}`);

      carToUpdate.year = args.year;
      carToUpdate.make = args.make;
      carToUpdate.model = args.model;
      carToUpdate.price = args.price;
      carToUpdate.personId = args.personId;

      return carToUpdate;
    },

    //Remove One To DB
    removePersonFromDb: (root, args) => {
      const personToRemoveIndex = personsDb.findIndex((e) => {
        return e.id === args.id;
      });
      if (personToRemoveIndex === -1)
        throw new Error(`No person with id ${args.id}`);

      return personsDb.splice(
        personToRemoveIndex,
        personToRemoveIndex === -1 ? 0 : 1
      );
    },
    removeCarFromDb: (root, args) => {
      const carToRemoveIndex = carsDb.findIndex((e) => {
        return e.id === args.id;
      });
      if (carToRemoveIndex === -1) throw new Error(`No car with id ${args.id}`);

      return carsDb.splice(carToRemoveIndex, carToRemoveIndex === -1 ? 0 : 1);
    },
  },
};

export { typeDefs, resolvers };
