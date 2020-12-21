import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ListStatus from "./Components/ListStatus";
import StatusList from './StatusList';
import Filter from "./Components/Filter";

function App() {
  return (
    <div>
      <Header title="Ninja Status HTTP" />
      <Filter label="Buscar por código Http"/>
      <ListStatus allStatus={StatusList} />
    </div>
  );
}

export default App;
