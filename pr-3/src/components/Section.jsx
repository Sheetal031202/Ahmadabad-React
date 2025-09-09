import React from 'react'
import { useState } from 'react'

function Products({ title, image, price }) {


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 box">
                        <h2>Product Name:{title.slice(0,15)}</h2>
                        <img src={image} alt="" />
                        <h2> Price: {price}</h2>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Products