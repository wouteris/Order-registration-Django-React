import React, { useState } from 'react'

function HookCounterFour() {
	const [items, setItems] = useState([])

	const addItem = () => {
		
    console.log(items)
	}

	return (
		<div>
			<button onClick={addItem}>Add a number</button>
		
      <div className="field"></div>
      <label htmlFor="driverCode">driverCode</label>
      <input onChange ={(e) => setItems({...items, value: e.target.value})} value={items.value} type="text" name="value" id="value" />
  
		</div>
	)
}

export default HookCounterFour