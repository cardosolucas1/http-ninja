import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Status from "./Components/Status";
import ListStatus from "./Components/ListStatus";
import StatusList from './StatusList';

function App() {
  return (
    <div>
      <Header title="Ninja Status HTTP" />
      {/* <div>
        <Status
          title="Unauthorized"
          code="401"
          description="O código de resposta de status de erro do cliente HTTP 401 Unauthorized  indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino."
          image=""
        />
      </div> */}
      <ListStatus allStatus={StatusList}/>
    </div>
  );
}

export default App;
