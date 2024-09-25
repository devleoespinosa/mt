import React from 'react';
import TuringMachine from './mt.tsx';

function Multiplicacion() {
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

    const states: state[] = [
            {
                state: "q0",
                conect: [
                    {
                        to: "q1", 
                        read: "1",
                        write: "0",
                        move: "R"
                    }
                ]
            },
            {
                state: "q1",
                conect: [
                    {
                        to: "q1", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q2", 
                        read: "x",
                        write: "x",
                        move: "R"
                    }
                ]
            },
            {
                state: "q2",
                conect: [
                    {
                        to: "q2", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q3", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                ]
            },
            {
                state: "q3",
                conect: [
                    {
                        to: "q3", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q3", 
                        read: "n",
                        write: "n",
                        move: "R"
                    },
                    {
                        to: "q4", 
                        read: " ",
                        write: "n",
                        move: "L"
                    }
                ]
            },
            {
                state: "q4",
                conect: [
                    {
                        to: "q4", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q4", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q4", 
                        read: "x",
                        write: "x",
                        move: "L"
                    },
                    {
                        to: "q4", 
                        read: "n",
                        write: "n",
                        move: "L"
                    },
                    {
                        to: "q5", 
                        read: " ",
                        write: " ",
                        move: "R"
                    },
                ]
            },
            {
                state: "q5",
                conect: [
                    {
                        to: "q5", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q1", 
                        read: "1",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q6", 
                        read: "x",
                        write: "x",
                        move: "R"
                    }
                ]
            },
            {
                state: "q6",
                conect: [
                    {
                        to: "q6", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q7", 
                        read: "1",
                        write: "0",
                        move: "R"
                    }
                ]
            },
            {
                state: "q7",
                conect: [
                    {
                        to: "q8", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q17", 
                        read: "n",
                        write: "n",
                        move: "L"
                    }
                ]
            },
            {
                state: "q8",
                conect: [
                    {
                        to: "q8", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q8", 
                        read: "x",
                        write: "x",
                        move: "L"
                    },
                    {
                        to: "q9", 
                        read: " ",
                        write: " ",
                        move: "R"
                    },
                ]
            },
            {
                state: "q9",
                conect: [
                    {
                        to: "q10", 
                        read: "0",
                        write: "1",
                        move: "R"
                    }
                ]
            },
            {
                state: "q10",
                conect: [
                    {
                        to: "q10", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q11", 
                        read: "x",
                        write: "x",
                        move: "R"
                    },
                ]
            },
            {
                state: "q11",
                conect: [
                    {
                        to: "q11", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q11", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q11", 
                        read: "n",
                        write: "n",
                        move: "R"
                    },
                    {
                        to: "q12", 
                        read: " ",
                        write: "n",
                        move: "L"
                    },
                ]
            },
            {
                state: "q12",
                conect: [
                    {
                        to: "q12", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q12", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q12", 
                        read: "n",
                        write: "n",
                        move: "L"
                    },
                    {
                        to: "q12", 
                        read: "x",
                        write: "x",
                        move: "L"
                    },
                    {
                        to: "q13", 
                        read: " ",
                        write: " ",
                        move: "R"
                    },
                ]
            },
            {
                state: "q13",
                conect: [
                    {
                        to: "q13", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q10", 
                        read: "0",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q14", 
                        read: "x",
                        write: "x",
                        move: "R"
                    }
                ]
            },
            {
                state: "q14",
                conect: [
                    {
                        to: "q14", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q15", 
                        read: "1",
                        write: "0",
                        move: "R"
                    }
                ]
            },
            {
                state: "q15",
                conect: [
                    {
                        to: "q16", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q17", 
                        read: "n",
                        write: "n",
                        move: "L"
                    }
                ]
            },
            {
                state: "q16",
                conect: [
                    {
                        to: "q16", 
                        read: "x",
                        write: "x",
                        move: "L"
                    },
                    {
                        to: "q16", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q16", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q5", 
                        read: " ",
                        write: " ",
                        move: "R"
                    },
                ]
            },
            {
                state: "q17",
                conect: [
                    {
                        to: "q17", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q17", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q17", 
                        read: "x",
                        write: "x",
                        move: "L"
                    },
                    {
                        to: "q18", 
                        read: " ",
                        write: " ",
                        move: "R"
                    },
                ]
            },
            {
                state: "q18",
                conect: [
                    {
                        to: "q18", 
                        read: "0",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "q18", 
                        read: "1",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "q18", 
                        read: "n",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q18", 
                        read: "x",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "qaccept", 
                        read: " ",
                        write: " ",
                        move: "L"
                    },
                ]
            },
            {
                state: "qaccept",
                conect: []
            }
    ]
    
    return(
        <>
        <TuringMachine states={states} />
        </>
    )
}

export default Multiplicacion;