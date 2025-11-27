import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { deleteApi, fetchAllData } from '../../Service/allApi'

function ViewStudents() {
  const viewData=useLoaderData()
  
  // navigate
  const navigateToEdit=useNavigate()
// delete
 const [allViewData, setAllViewData] = useState(viewData)
  async function deleteDelete(idNo) {
    let s = await deleteApi(idNo)
    if (s) {
      alert("deleted")
      setAllViewData(await fetchAllData())
    }
    else {
      alert("not deleted")
    }
  }
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("az")


  let filterData = allViewData.filter((a) => {
    return a.name.toLowerCase().includes(search.toLowerCase())
  })
    .sort((a, b) => {
      if (sort === "az") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <>
 <div className="min-h-screen w-full m-5 bg-gray-900 text-white p-6">
      <h3 className="text-2xl font-semibold mb-6">View student data</h3>
<div className="flex flex-col md:flex-row gap-4 mb-6">

          {/* Search Bar */}
          <input
            type="text"
            onChange={(e) => { setSearch(e.target.value) }}
            placeholder="Search products..."
            className="w-full md:w-1/3 bg-gray-800 text-white px-4 py-2 rounded-lg outline-none border border-gray-700 focus:border-indigo-500"
          />

        

          {/* Sorting Select */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full md:w-1/3 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 outline-none"
          >
            <option>Sort By</option>
            <option value="az">Name: A → Z</option>
            <option value="za">Name: Z → A</option>
           
          </select>

        </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">NO</th>
              <th className="p-3 border border-gray-700">Image</th>
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Std</th>
              <th className="p-3 border border-gray-700">Div</th>
              <th className="p-3 border border-gray-700">Age</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filterData.map((e,i) => (
              <tr key={e.id} className="text-center bg-gray-800">
                                <td className="p-3 border border-gray-700">{i+1}</td>

                <td className="p-3 border border-gray-700">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="h-14 w-14 object-cover rounded"
                  />
                </td>

                <td className="p-3 border border-gray-700">{e.name}</td>
                <td className="p-3 border border-gray-700">{e.std}</td>
                <td className="p-3 border border-gray-700">{e.div}</td>
                <td className="p-3 border border-gray-700">{e.age}</td>

                <td className="p-3 border border-gray-700 space-x-3">
                  <button
                    onClick={() => navigateToEdit(`/edit/${e.id}`)}
                    className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteDelete(e.id)}
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>    </>
  )
}

export default ViewStudents
