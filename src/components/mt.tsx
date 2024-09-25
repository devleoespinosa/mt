import React from "react";

interface conect {
    to : string,
    read: string,
    write: string,
    move: string
}
interface state {
    state : string,
    conect : conect []
}
interface mt {
    states : state [];
}

function TuringMachine({states}: mt) {

    const [tape, setTape] = React.useState<string[]>([" "])
    const [id, setIndex] = React.useState(1)
    const [see, setSee] = React.useState(false)
    const [formData, setFormData] = React.useState({inputUser: '',});
    const [startButton, setButton] = React.useState(true)

    const runTM = async (stateSelected:state, index:number) => {
        try {
            setTimeout(async () => {
                setIndex(index)
                await new Promise(resolve => setTimeout(resolve, 0));
                if (stateSelected.state === "qaccept") {
                    return 0
                }
                var action = stateSelected.conect.filter((x)=> x.read === tape[index])[0]
                console.log("ESTADO ACTUAL: " + stateSelected.state)
                console.log("ACCIONES A REALIZAR HACIA" + action.to)
                console.log(index)
                console.log(tape)
                if (action.move === "R") {
                    var aux = tape
                    aux[index] = action.write
                    if (index+1 === tape.length) {
                        aux.push(" ")
                    }
                    setTape(aux)
                    await new Promise(resolve => setTimeout(resolve, 0));
                    runTM(states.filter((x)=> x.state === action.to)[0], index+1)
                    return 0
                }
                if (action.move === "L") {
                    var auxleft = tape
                    auxleft[index] = action.write
                    setTape(auxleft)
                    await new Promise(resolve => setTimeout(resolve, 0));
                    runTM(states.filter((x)=> x.state === action.to )[0], index-1)
                    return 0
                }
            }, 500);
        } catch (error) {
            alert("Revise la construcción de su máquina de turing")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });


    };

    const updateInfo =  () =>{
        setSee(true)
        setTape((tape) =>[...tape, ...formData.inputUser.split("")])
    }
    
    return(
        <div style={{display:'block'}}>
            {
                see===false?
                <div style={{display:'block'}}>
                    <label htmlFor="inputUser">Entrada:</label><br />
                    <input type="text" id="inputUser" name="inputUser" value={formData.inputUser} onChange={handleChange} required /><br /><br />
                    <button onClick={updateInfo} >Subir input</button>
                </div>
                :
                <></>
            }
            {
                see?
                <div>
                    <div>
                     { startButton ? <button onClick={()=>{setButton(false);runTM(states[0], 1)}} >EMPEZAR</button> : <></>}
                    </div>
                    <div>
                        {
                            tape.map((value, index)=>(
                                index === id?
                                <h1 style={{color:'red', display:'inline-block'}}>{value}</h1>
                                : 
                                <h1 style={{display:"inline-block"}}>{value}</h1>
                            ))
                        }
                    </div>
                    <div>
                        <button onClick={()=>{window.location.reload()}} >LIMPIAR</button>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default TuringMachine;