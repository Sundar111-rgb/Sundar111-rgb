import React from "react";


const NumberContext = React.createContext();


function Howtousecontext() {

    return (

            <NumberContext.Provider name={45}>
                <div>
                    <Display  />
                </div>
            </NumberContext.Provider>

    );
}

function Display() {
    return (
        <NumberContext.Consumer>
            {name => <div>The answer is --------------{name}.</div>}
        </NumberContext.Consumer>
    );
}

function Display1() {
    return (
        <NumberContext.Consumer>
            {name => <div>The answer is {name}.</div>}
        </NumberContext.Consumer>
    );
}


export default  Howtousecontext;
