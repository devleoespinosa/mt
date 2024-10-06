import React from 'react';
import './App.css';
import Resta from './components/modelos/resta.tsx';
import Multiplicacion from './components/modelos/multiplicacion.tsx';
import Division from './components/modelos/division.tsx';
import DivisibleCinco from './components/modelos/divisibleCinco.tsx';
import A2n from './components/modelos/a2n.tsx';
import NMultiplicacion from './components/modelos/nmultiplicacion.tsx';

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
            <br/>
            <p>Para ejecutar los diversos programas de funciones tienen distintos modos, para longitud, solo cadena de 0's, para divisible solo binarios y para n(n-1) solo 1's</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <br/>
            <p>Ejemplo longitud: 000000  | Ejemplo divisible 5: 10100 | Ejemplo n(n-1): 1111</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              {
                mt === ""?
                <>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("resta")}}>RESTA</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("multiplicacion")}}>MULTIPLICACIÓN</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("division")}}>DIVISIÓN</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("longitud")}}>LONGITUD 2 A LA N</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("divisible")}}>BINARIO DIVISIBLE EN 5</button>
                <button style={{margin:'1rem'}} onClick={()=>{selecMT("funcion")}}>F(N)=N(N-1)</button>
                </>
                :
                mt === "resta"?
                <Resta/>
                :
                mt === "multiplicacion"?
                <Multiplicacion/>
                :
                mt === "division"?
                <Division/>
                :
                mt === "longitud"?
                <A2n/>
                :
                mt === "divisible"?
                <DivisibleCinco/>
                :
                mt === "funcion"?
                <NMultiplicacion/>
                :
                <></>
              }
            </div>
        </div>
      </>
  );
}

export default App;
