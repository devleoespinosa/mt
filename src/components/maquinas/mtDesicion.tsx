import React from "react";

interface conect {
    to : string,
    readFirstTape: string,
    writeFirstTape: string,
    moveFirstTape: string,
    readSecondTape: string,
    writeSecondTape: string,
    moveSecondTape: string
}
interface state {
    state : string,
    conect : conect []
}
interface mt {
    states : state [];
}

function TuringMachineDecision({states}: mt) {

    const [firstTape, setFirstTape] = React.useState<string[]>([" "])
    const [secondTape, setSecondTape] = React.useState<string[]>([" "])
    const [id, setIndex] = React.useState(1)
    const [secondId, setSecondIndex] = React.useState(1)
    const [see, setSee] = React.useState(false)
    const [formData, setFormData] = React.useState({inputUser: '',});
    const [startButton, setButton] = React.useState(true)
    const [correct, setCorrect] = React.useState(true)
    const [accept, setAccept] = React.useState(false)

    const secondRun = async (action:conect, index: number) =>{
        if (action.moveSecondTape === "R") {
            var aux = secondTape
            aux[index] = action.writeSecondTape
            if (index+1 === secondTape.length) {
                aux.push(" ")
            }
            setSecondTape(aux)
            await new Promise(resolve => setTimeout(resolve, 0));
            return index + 1
        }
        if (action.moveSecondTape === "L") {
            var auxleft = secondTape
            auxleft[index] = action.writeSecondTape
            setSecondTape(auxleft)
            await new Promise(resolve => setTimeout(resolve, 0));
            return index - 1
        }
        if (action.moveSecondTape === "S") {
            var auxcenter = secondTape
            auxcenter[index] = action.writeSecondTape
            setSecondTape(auxcenter)
            await new Promise(resolve => setTimeout(resolve, 0));
            return index 
        }
        return 0
    }

    const runTM = async (stateSelected:state, index:number, secondIndex: number, time:number) => {
        try {
            setTimeout(async () => {
                setIndex(index)
                setSecondIndex(secondIndex)
                await new Promise(resolve => setTimeout(resolve, 0));
                if (stateSelected.state === "qaccept") {
                    setCorrect(false)
                    setAccept(true)
                    return 0
                }
                var action = stateSelected.conect.filter((x)=> x.readFirstTape === firstTape[index] && x.readSecondTape === secondTape[secondIndex])[0]
                if (action !== undefined) {
                    if (action.moveFirstTape === "R") {
                        var aux = firstTape
                        aux[index] = action.writeFirstTape
                        if (index+1 === firstTape.length) {
                            aux.push(" ")
                        }
                        setFirstTape(aux)
                        await new Promise(resolve => setTimeout(resolve, 0));
                        runTM(states.filter((x)=> x.state === action.to)[0], index+1, await secondRun(action, secondIndex), time)
                        return 0
                    }
                    if (action.moveFirstTape === "L") {
                        var auxleft = firstTape
                        auxleft[index] = action.writeFirstTape
                        setFirstTape(auxleft)
                        await new Promise(resolve => setTimeout(resolve, 0));
                        runTM(states.filter((x)=> x.state === action.to )[0], index-1, await secondRun(action, secondIndex), time)
                        return 0
                    }
                    if (action.moveFirstTape === "S") {
                        var auxcenter = firstTape
                        auxcenter[index] = action.writeFirstTape
                        setSecondTape(auxcenter)
                        await new Promise(resolve => setTimeout(resolve, 0));
                        runTM(states.filter((x)=> x.state === action.to )[0], index, await secondRun(action, secondIndex),time)
                        return 0
                    }
                }else{
                    setCorrect(false)
                    return 0
                }
            }, time);
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
        setFirstTape((tape) =>[...tape, ...formData.inputUser.split("")])
        setSecondTape((tape)=> [...tape, " "])
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
                    {
                        correct?
                        <>
                        <div>
                            { startButton ? <button style={{marginRight:'1rem'}} onClick={()=>{setButton(false);runTM(states[0], 1,1,300)}} >EMPEZAR (Ver proceso)</button> : <></>}
                            { startButton ? <button onClick={()=>{setButton(false);runTM(states[0], 1,1,1)}} >EMPEZAR (Rápido)</button> : <></>}
                        </div>
                        <div>
                            {
                                firstTape.map((value, index)=>(
                                    index === id?
                                    <h1 style={{color:'red', display:'inline-block'}}>{value}</h1>
                                    : 
                                    <h1 style={{display:"inline-block"}}>{value}</h1>
                                ))
                            }
                        </div>
                        <div>
                            {
                                secondTape.map((value, index)=>(
                                    index === secondId?
                                    <h1 style={{color:'red', display:'inline-block'}}>{value}</h1>
                                    : 
                                    <h1 style={{display:"inline-block"}}>{value}</h1>
                                ))
                            }
                        </div>
                        </>
                        :
                        accept?
                        <>
                        <div>
                            <h3 style={{color:'green'}}> RESULTADO CORRECTO (ACCEPT) </h3>
                        </div>
                        </>
                        :
                        <>
                        <div>
                            <h3 style={{color:'red'}}> La entrada no es correcta (REJECT) </h3>
                        </div>
                        </>
                    }
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

export default TuringMachineDecision;