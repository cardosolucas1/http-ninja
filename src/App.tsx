import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ListStatus from "./Components/ListStatus";
import StatusList from './StatusList';

function App() {
  return (
    <div>
      <Header title="Ninja Status HTTP" />
      <ListStatus allStatus={StatusList} />
    </div>
  );
}

export default App;
