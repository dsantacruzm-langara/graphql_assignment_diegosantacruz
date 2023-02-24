import "./App.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import PersonsList from "./components/listing/PersonsList";
import Title from "./components/Title";
import AddPerson from "./components/AddPerson";
import AddCar from "./components/AddCar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ backgroundColor: "lightblue" }}>
        <Title />
        <AddPerson />
        <AddCar />
        <PersonsList />
      </div>
    </ApolloProvider>
  );
}

export default App;
