import React from 'react'
import "../App.css"
function Product({val}) {
  return (
    <>
      <table border="1" >
        <thead>
            <tr>
                <th>IMAGE</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>TITLE</th>
            </tr>
        </thead>
        <tbody>
           <tr>
                <th>{val.image}</th>
                <th>{val.category}</th>
                <th>{val.price}</th>
                <th>{val.title}</th>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Product
