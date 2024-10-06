import React from 'react';
import TuringMachine from '../maquinas/mt.tsx';

function Resta() {
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
                        to: "q0", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q0", 
                        read: "0",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q1", 
                        read: "-",
                        write: "-",
                        move: "R"
                    },

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
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q2", 
                        read: " ",
                        write: " ",
                        move: "L"
                    },

                ]
            },
            {
                state: "q2",
                conect: [
                    {
                        to: "q3", 
                        read: "1",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q5", 
                        read: "-",
                        write: "-",
                        move: "L"
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
                        move: "L"
                    },
                    {
                        to: "q4", 
                        read: "-",
                        write: "-",
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
                        to: "q0", 
                        read: "1",
                        write: "0",
                        move: "R"
                    },
                    {
                        to: "q8", 
                        read: " ",
                        write: " ",
                        move: "R"
                    }
                ]
            },
            {
                state: "q5",
                conect: [
                    {
                        to: "q5", 
                        read: "0",
                        write: "0",
                        move: "L"
                    },
                    {
                        to: "q6", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q9", 
                        read: " ",
                        write: " ",
                        move: "R"
                    }
                ]
            },
            {
                state: "q6",
                conect: [
                    {
                        to: "q6", 
                        read: "1",
                        write: "1",
                        move: "L"
                    },
                    {
                        to: "q7", 
                        read: " ",
                        write: " ",
                        move: "R"
                    }
                ]
            },
            {
                state: "q7",
                conect: [
                    {
                        to: "q7", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "q7", 
                        read: "0",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "q7", 
                        read: "-",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "qaccept", 
                        read: " ",
                        write: " ",
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
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "q8", 
                        read: "-",
                        write: "-",
                        move: "R"
                    },
                    {
                        to: "q8", 
                        read: "1",
                        write: "1",
                        move: "R"
                    },
                    {
                        to: "qaccept", 
                        read: " ",
                        write: "1",
                        move: "L"
                    }
                ]
            },
            {
                state: "q9",
                conect: [
                    {
                        to: "q9", 
                        read: "0",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "q9", 
                        read: "-",
                        write: " ",
                        move: "R"
                    },
                    {
                        to: "qaccept", 
                        read: " ",
                        write: "0",
                        move: "L"
                    }
                ]
            },
            {
                state: "qaccept",
                conect: [ ]
            },
    ]
    
    return(
        <>
        <TuringMachine states={states} />
        </>
    )
}

export default Resta;