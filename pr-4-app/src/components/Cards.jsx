import React from 'react'

function Cards({i,t,p}) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-500 m-10">
                <a href="#">
                    <img className="rounded-t-lg" height={"100px"} width={"200px"} src={i} alt="" />
                </a>
                <div className="text-2xl my-1">
                    <h3>Product Name: {t}</h3>
                    <p>Product Price: {p}</p>

                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"    >
                        Add to Cart       </a>
                </div>
            </div>

        </>
    )
}

export default Cards
