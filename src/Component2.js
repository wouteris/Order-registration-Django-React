import React from 'react';

  
export default function Component2(props) {
    return (
        <div className="main-cointainer">
            <h2>Component2 met props van component1</h2> 
              
<p>{ props.test } { props.koptekst} </p>
  
        </div>
    )
}