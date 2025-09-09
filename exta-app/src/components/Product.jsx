import React from 'react'

function Product({t,i,p}) {
  return (
    <>
      <div>
        <h2>title :{t}</h2>
        <img src={i} height={"200px"}/>
        <h3>price :{p}</h3>
      </div>
    </>
  )
}

export default Product
