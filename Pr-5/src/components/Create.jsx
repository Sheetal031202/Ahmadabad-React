import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router";

function Create() {
  let [input, setInput] = useState({ name: "", category: "", price: "" })
  let [readAll, setReadAll] = useState([])

  // function to submit
  async function submit(e) {
    e.preventDefault();

    if (!input.name || !input.category || !input.price) {
      alert("Please fill all the fields")
      return; // stop execution if fields are empty
    }

    await axios.post("http://localhost:3000/product", input)
    console.log("Added:", input)

    setInput({ name: "", category: "", price: "" })

    fetch() // refresh data immediately after add
  }

  // to read in the page only
  async function fetch() {
    let get = await axios.get("http://localhost:3000/product")
    setReadAll(get.data)
  }

  // to delete data
  async function deleteData(id) {
    await axios.delete("http://localhost:3000/product" + id)
    alert("Data deleted successfully")
    fetch()
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <form onSubmit={submit}>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Product Name:</th>
              <th>
                <input
                  type="text"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Product Category:</th>
              <th>
                <input
                  type="text"
                  value={input.category}
                  onChange={(e) =>
                    setInput({ ...input, category: e.target.value })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>Product Price:</th>
              <th>
                <input
                  type="text"
                  value={input.price}
                  onChange={(e) =>
                    setInput({ ...input, price: e.target.value })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>Confirm</th>
              <th>
                <button type="submit">Submit</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>

      {/* read */}
      <div style={{ margin: "25px 0" }}>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Product Name:</th>
              <th>Product Category:</th>
              <th>Product Price:</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {readAll.map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.category}</td>
                <td>{d.price}</td>
                <td>
                  <button type="button">Edit</button>
                  <Link to={"/read/" + d.id}>
                    <button type="button">Read</button>
                  </Link>
                  <button type="button" onClick={() => deleteData(d.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Create
