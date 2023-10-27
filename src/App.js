import './App.css';
import ButtonMostrar from './Componentes/Formulario/Index';
import Login from './Componentes/Login/Index';
import Registro from './Componentes/Registro';
import Inicio from './Componentes/Inicio/Index';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Registro></Registro>}></Route>
          <Route path='/blogs' element={<Inicio></Inicio>}></Route>
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
