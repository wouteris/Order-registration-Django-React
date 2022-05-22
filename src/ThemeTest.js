import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core';


export default function ThemeTest() {

const [count, setCount] = useState(0);

return(
    <div>
        <p> You clicked {count} times for today</p>
        <button backgroundcolor = "red" onClick={() => setCount(count + 1)}>Click me please</button>
    </div>)
}