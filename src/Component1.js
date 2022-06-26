import React, { useState } from 'react';
import Component2 from './Component2';
  
function Component1() {
  
    const [koptekst, setKoptekst] = useState(0)
    const [test, setTest] = useState("Test")
  
    const changeState = () => {  
        setKoptekst(koptekst + 1); 
       }; 
  
    return (  
        <div className="App">  
            <Component2 koptekst={ koptekst} test = { test } />   
            <div className="main-cointainer">
                <h2>Component1</h2> 
                <button  onClick={changeState} type="button">
                  Send state 
                </button>    
            </div>
        </div>                 
    );
 }
  
 export default Component1;