import React from 'react';
import TuringMachineDecision from '../maquinas/mtDesicion.tsx';

function A2n() {
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

    const states: state[] = [
        {
            state: "q0",
            conect: [
                {
                    to: "q1", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: "0",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q1",
            conect: [
                {
                    to: "q1", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "R",
                    readSecondTape: "0",
                    writeSecondTape: "0",
                    moveSecondTape: "R"
                },
                {
                    to: "q2", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "L",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "L"
                },
                {
                    to: "qaccept", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q2",
            conect: [
                {
                    to: "q2", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "L",
                    readSecondTape: "0",
                    writeSecondTape: "0",
                    moveSecondTape: "L"
                },
                {
                    to: "q3", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "R"
                }
            ]
        },
        {
            state: "q3",
            conect: [
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "0",
                    writeSecondTape: "1",
                    moveSecondTape: "R"
                }
            ]
        },
        {
            state: "q4",
            conect: [
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "R"
                },
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "0",
                    writeSecondTape: "0",
                    moveSecondTape: "R"
                },
                {
                    to: "q5", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: "1",
                    moveSecondTape: "L"
                }
            ]
        },
        {
            state: "q5",
            conect: [
                {
                    to: "q5", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "L"
                },
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "0",
                    writeSecondTape: "1",
                    moveSecondTape: "R"
                },
                {
                    to: "q6", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "R"
                }
            ]
        },
        {
            state: "q6",
            conect: [
                {
                    to: "q6", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "0",
                    moveSecondTape: "R"
                },
                {
                    to: "q7", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "L"
                }
            ]
        },
        {
            state: "q7",
            conect: [
                {
                    to: "q7", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "0",
                    writeSecondTape: "0",
                    moveSecondTape: "L"
                },
                {
                    to: "q8", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "R"
                }
            ]
        },
        {
            state: "q8",
            conect: [
                {
                    to: "q1", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "0",
                    writeSecondTape: "0",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "qaccept",
            conect: []
        }
    ]   
    
    return(
        <>
        <TuringMachineDecision states={states} />
        </>
    )
}

export default A2n;