import React from 'react'
import "../App.css"

function product({ title, image, price }) {
  return (
    <>
      <div className='card' >

        <h2>Title:{title}</h2>
        <center>
          <img src={image} alt="" height="250px" width="250px" />

        </center>
        <h3>PRICE: {price}</h3>
      </div>
    </>
  )
}

export default product;
