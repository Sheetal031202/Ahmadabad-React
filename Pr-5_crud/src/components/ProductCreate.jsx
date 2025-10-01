import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router";



function ProductCreate() {
    let [prAdd, setPrAdd] = useState({ productname: "", category: "", price: "" })
    // 3
    let [sent, setSent] = useState([])


    // 2.....submit function 
    // 3 .. after geting data in cl.. i want to add this data in my json file so , we have to make tis normal function into async function
    // 
    async function submitProductData(e) {
        // to prevent page load
        e.preventDefault();


        if (!prAdd.productname || !prAdd.category || !prAdd.price) {
            alert("please field all the fields")
        }

        // 3 aagal link, and link ma kya data mukva chhe so prAdd no object j joiye chhe                                                                                                                      
        // let dataPost = await axios.post("http://localhost:3000/pr", prAdd)
        await axios.post("http://localhost:3000/pr", prAdd)

        // field empty
        setPrAdd({ productname: "", category: "", price: "" })



    }
    // 4 server(json file)thi data lay ne display karavana async function
    // to fetch data
    async function fetchData() {
        let getData = await axios.get("http://localhost:3000/pr")
        setSent(getData.data)
    }

    // delete karava
    async function deleteData(id) {
        await axios.delete("http://localhost:3000/pr/"+id)
        alert("Data successfully deleted")
        fetchData()
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>

            {/* 1 */}
            <div className='bg-gray-950 py-32'>
                <form className="max-w-sm mx-auto" onSubmit={submitProductData}>
                    <div className="mb-5">
                        <label htmlFor="p-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your Product Name:  </label>
                        <input type="text" value={prAdd.productname} onChange={(e) => setPrAdd({ ...prAdd, productname: e.target.value })} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                            placeholder="  Your Product Name:" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="p-cat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your Product Category:  </label>
                        <input type="text" value={prAdd.category} onChange={(e) => setPrAdd({ ...prAdd, category: e.target.value })} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                            placeholder="  Your Product Category:" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="p-price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your Product price:  </label>
                        <input type="text" value={prAdd.price} onChange={(e) => setPrAdd({ ...prAdd, price: e.target.value })} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                            placeholder="  Your Product Price:" />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>


                </form>



                <div className="relative overflow-x-auto shadow-md sm:rounded-lg " style={{ marginTop: "30px" }}>
                    <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 " >
                        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">  Product name    </th>
                                <th scope="col" className="px-6 py-3">  Product Category </th>
                                <th scope="col" className="px-6 py-3">  Product Price  </th>
                                <th scope="col" className="px-6 py-3"> Action </th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>


                            {sent.map((i,d) =>
                                <tr key={d}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" > {i.productname} </th>
                                    <td className="px-6 py-4">{i.category}</td>
                                    <td className="px-6 py-4">{i.price}</td>
                                    <td className="px-6 py-4"> <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  >
                                        Edit   </button>
                                    <Link to={"/singleRead/"+i.id}> <button  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:focus:ring-yellow-900"  >
                                            Read   </button></Link>
                                        <button  onClick={()=>deleteData(i.id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"  >
                                            Delete </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default ProductCreate