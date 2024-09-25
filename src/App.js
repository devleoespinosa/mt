import React from 'react';
import './App.css';
import Resta from './components/resta.tsx';
import Multiplicacion from './components/multiplicacion.tsx';
import Division from './components/division.tsx';

function App() {

  const [mt, setMt] = React.useState("")

  const selecMT = (rol) =>{
    setMt(rol)
  }

  return (
    <>
        <div style={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <h1>Máquinas de turing: {mt}</h1>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <br/>
            <p>Para ejecutar los diversos programas escribe los números usando 1's (ejem: 3 = 111) y el operador (-,x,/)</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <br/>
            <p>Ejemplo resta: 111-11  | Ejemplo multiplicacion: 11x11 | Ejemplo división: 1111/11</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              {
                mt === ""?
                <>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("resta")}}>RESTA</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("multiplicacion")}}>MULTIPLICACIÓN</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("division")}}>DIVISIÓN</button>
                </>
                :
                mt === "resta"?
                <Resta/>
                :
                mt === "multiplicacion"?
                <Multiplicacion/>
                :
                <Division/>
              }
            </div>
        </div>
      </>
  );
}

export default App;
