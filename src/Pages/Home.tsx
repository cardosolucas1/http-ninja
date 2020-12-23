import React, { useContext } from "react";
import Header from ".././Components/Header";
import ListStatus from ".././Components/ListStatus";
import Filter from ".././Components/Filter";
import statusContext from '../Context/statusContext';

const Home: React.FC<void> = () => {
  const {
    statusHttp,
    statusHttpFiltered,
    setStatusHttpFiltered
  } = useContext(statusContext);

  const handleFilter: Function = (input: String) => {
    setStatusHttpFiltered(
      statusHttp.filter((status) => status.code.includes(input.toString()))
    );
  }

  return (
    <>
      <Header title="Ninja Status HTTP" />
      <Filter label="Buscar por código Http" handleFilter={handleFilter}/>
      <ListStatus allStatus={statusHttpFiltered} />
    </>
  );
}

export default Home;
