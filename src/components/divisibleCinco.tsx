import React from 'react';
import TuringMachineDecision from './mtDesicion.tsx';

function DivisibleCinco() {
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
                    to: "q0", 
                    readFirstTape: "1",
                    writeFirstTape: "1",
                    moveFirstTape: "R",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "S"
                },
                {
                    to: "q0", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "R",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "S"
                },
                {
                    to: "q1", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "L",
                    readSecondTape: " ",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q1",
            conect: [
                {
                    to: "q2", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q8", 
                    readFirstTape: "1",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q13", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
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
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "R"
                },
                {
                    to: "q3", 
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
            state: "q3",
            conect: [
                {
                    to: "q3", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "n",
                    writeSecondTape: "n",
                    moveSecondTape: "L"
                },
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "n",
                    moveSecondTape: "R"
                },
                {
                    to: "q5", 
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
            state: "q4",
            conect: [
                {
                    to: "q4", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "n",
                    writeSecondTape: "n",
                    moveSecondTape: "R"
                },
                {
                    to: "q3", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: "n",
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
                    readSecondTape: "n",
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
                    moveSecondTape: "L"
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
                    writeSecondTape: "1",
                    moveSecondTape: "L"
                },
                {
                    to: "q7", 
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
            state: "q7",
            conect: [
                {
                    to: "q1", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "L",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q8",
            conect: [
                {
                    to: "q8", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q8", 
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q9", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q9",
            conect: [
                {
                    to: "q9", 
                    readFirstTape: " ",
                    writeFirstTape: "n",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "R"
                },
                {
                    to: "q10", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "L",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "L"
                }
            ]
        },
        {
            state: "q10",
            conect: [
                {
                    to: "q10", 
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "L",
                    readSecondTape: "1",
                    writeSecondTape: " ",
                    moveSecondTape: "L"
                },
                {
                    to: "q11", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "R"
                },
                {
                    to: "q11",
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: " ",
                    moveSecondTape: "R"
                }
            ]
        },
        {
            state: "q11",
            conect: [
                {
                    to: "q12", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q12", 
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "S",
                    readSecondTape: " ",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q12",
            conect: [
                {
                    to: "q12", 
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "L",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q1", 
                    readFirstTape: "0",
                    writeFirstTape: "0",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q13",
            conect: [
                {
                    to: "q13", 
                    readFirstTape: "0",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "q14", 
                    readFirstTape: "n",
                    writeFirstTape: "n",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q14",
            conect: [
                {
                    to: "q15", 
                    readFirstTape: "n",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                },
                {
                    to: "qaccept", 
                    readFirstTape: " ",
                    writeFirstTape: " ",
                    moveFirstTape: "S",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q15",
            conect: [
                {
                    to: "q16", 
                    readFirstTape: "n",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q16",
            conect: [
                {
                    to: "q17", 
                    readFirstTape: "n",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q17",
            conect: [
                {
                    to: "q18", 
                    readFirstTape: "n",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
                    moveSecondTape: "S"
                }
            ]
        },
        {
            state: "q18",
            conect: [
                {
                    to: "q14", 
                    readFirstTape: "n",
                    writeFirstTape: " ",
                    moveFirstTape: "R",
                    readSecondTape: "1",
                    writeSecondTape: "1",
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

export default DivisibleCinco;