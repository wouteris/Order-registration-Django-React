import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddProduct(props) {
  const initialFormState = { id: null, productCode: '', productDescription: ''}
  const [ product, setProduct ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setProduct({ ...product, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add product</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!product.productCode || !product.productDescription) return

        
        
        props.addProduct(product)
        setProduct(initialFormState)
        history('/product')

      }} >
        <div className="field">
          <label>Code</label>
          <input
            type="text"
            name="productCode"
            placeholder="Code"
            value={product.productCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="productDescription"
            placeholder="Description"
            value={product.productDescription}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddProduct
