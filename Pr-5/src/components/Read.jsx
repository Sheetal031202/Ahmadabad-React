import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


function Read() {
    let [readOne, setReadOne] = useState({})
    const { readId } = useParams();
    const navigate = useNavigate();


    async function readSpecific(readId) {
        let specific = await axios.get("http://localhost:3000/pr/" + readId)
        setReadOne(specific.data)
    }

    function handleBack() {
        navigate("/");
    }
    useEffect(() => {
        readSpecific(readId)
    }, [])
    return (
        <table border={""}>
            <thead>
                <tr>
                    <th>Product Name:</th>
                    <th>Product category:</th>
                    <th>Product price:</th>


                </tr>
            </thead>
            <tbody>

                <tr >
                    <th>{readOne.name}</th>
                    <th>{readOne.category}</th>
                    <th>{readOne.price}</th>


                </tr>



            </tbody>
            <button onClick={handleBack}>Back to home</button>
        </table>

    )
}

export default Read