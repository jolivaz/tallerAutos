import React from 'react';
import AgregarCita from './components/agregarCitas/agregarCitas';
import ListadoCitas from './components/listadoCitas/listadoCitas'; 
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1 className="text-center">Taller de Autos CSC</h1>
        </header>
        <div className="row main">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6 lista-citas">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
