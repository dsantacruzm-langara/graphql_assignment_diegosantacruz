import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import DisplayInfo from "./components/Pages/DisplayInfo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: "lightblue" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/person/:id" element={<DisplayInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
