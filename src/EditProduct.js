import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


function EditProduct(props) {

  //
  const [product, setProduct] = useState(props.currentProduct)
  const history = useNavigate();

  //
  useEffect(() => {

    setProduct(props.currentProduct)
    
  } , [ props ]); 

  //
  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  

  }
   
  
  //
    return (
      <div className="ui main">
        <h2>Edit product</h2>
        <form className="ui form" onSubmit={event => {
        event.preventDefault()
        props.setEditing(false)
        props.updateProduct(product.id, product)
        history('/product')
      }}>
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
          <button className="ui button blue">Update</button>
          <button className="ui button red">Cancel</button>
        </form>
      </div>
    );
  }


export default EditProduct;
