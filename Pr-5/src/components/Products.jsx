import React, { useEffect, useState } from 'react'
import axios from "axios";
function Products() {
    let [inputText, setInputtext] = useState({
        productname: "",
        category: "",
        price: "",
    })

    let [data, setData] = useState([])
    // submit form function
    async function handleSubmit(e) {

        e.preventDefault();

        if (!inputText.productname.trim() || !inputText.category.trim() || !inputText.price.trim()) { alert("please Enter all the field") }
        console.log(inputText)
        console.log("hi")

        // Empty feild
        setInputtext({
            productname: "",
            category: "",
            price: "",
        })


        // now want to add this data in  db.json so (data add karva=post)
        let r = await axios.post("http://localhost:3000/pr", inputText)
        console.log(r.data)

    }


    // function to fetch api for display 
    async function fetchData() {
        let getdata = await axios.get("http://localhost:3000/pr")
        setData(getdata.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2 style={{ margin: "25px" }}>ADD DATA</h2>


            <form action="" onSubmit={handleSubmit}>

                <table border={""}>
                    <thead>
                        <tr>
                            <th>PRODUCT NAME:</th>
                            <th>
                                <input value={inputText.productname} onChange={(e) => setInputtext({ ...inputText, productname: e.target.value })} />
                            </th>
                        </tr>
                        <tr>
                            <th>CATEGORY:</th>
                            <th>
                                <input value={inputText.category} onChange={(e) => setInputtext({ ...inputText, category: e.target.value })} />
                            </th></tr>
                        <tr>
                            <th>PRICE:</th>
                            <th>
                                <input value={inputText.price} onChange={(e) => setInputtext({ ...inputText, price: e.target.value })} />
                            </th>
                        </tr>
                    </thead>

                    <button type="sumbit">Submit</button>
                </table>

                <tbody border={""}>
                    {data.map((element) => {
                        return (
                            <tr key={element.id}>
                                <td>{element.productName}</td>
                                <td>{element.category}</td>
                                <td>{element.price}</td>
                                <td>
                                    {" "}
                                    <button>Edit</button> <button>Read</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </form >


            {/* display Data */}

        </>
    )
}

export default Products