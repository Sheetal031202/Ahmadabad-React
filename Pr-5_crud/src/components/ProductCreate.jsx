import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


function SinglePruductRead() {

    let [readOneData, setReadOneData] = useState({})
    const { prId } = useParams();
    const navigate = useNavigate();

console.log(prId)


    async function readSingle(prId) {
        let singleData = await axios.get("http://localhost:3000/pr/" + prId)
        setReadOneData(singleData.data)
    
    }

    function handleBack() {
        navigate("/");
    }


    useEffect(() => {
        readSingle(prId)
    }, [])



    return (
        <>
            <div className=" bg-gray-900 relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">   Product name  </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">   Product category  </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">   Product price  </th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >  {readOneData.productname} </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >   {readOneData.category} </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >   {readOneData.price}  </th>
                        </tr>

                    </tbody>
              
                </table>
                      <button  onClick={handleBack} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"  >
                        back to home</button>
            </div>

        </>
    )
}

export default SinglePruductRead