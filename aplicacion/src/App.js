import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import UserSocket from './UserSocket';
import Planilla from './Planilla';
import './App.css';

function App() {
  // useEffect(() => {
  //   const userSocket = new UserSocket();
  //   userSocket.read(response => {
  //     console.log(response, 'ressssssssssssssssssssssssssssssssssssssss');
  //   })
  // });

  return (
    <div>
      <Planilla/>
      <Table striped bordered hover>
        <thead>
          <h1>Planilla</h1>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td> Editar</td>
            <td>ELiminar</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
