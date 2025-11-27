import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { updateSIngleData } from '../../Service/allApi'

function Edit() {

  const dataFromLoader = useLoaderData()

//   navigate
  const navigateToView = useNavigate()

  const [editData, setEditData] = useState({
    id: dataFromLoader.id,
    name: dataFromLoader.name,
    std: dataFromLoader.std,
    div: dataFromLoader.div,
    age: dataFromLoader.age,
    image: dataFromLoader.image,
  })
// onchgange
  function handleOnchange(e) {
    const { name, value } = e.target
    setEditData({ ...editData, [name]: value })
  }

//   submit
  async function handleOnSubmit(e) {
    e.preventDefault()
    let s = await updateSIngleData(editData.id, editData)
    if (s) {
      alert("updated")
      navigateToView("/view")
    } else {
      alert("not updated")
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 my-10 ">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Edit Student
        </h2>

        <form className="space-y-5" onSubmit={handleOnSubmit}>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Student Name
            </label>
            <input
              type="text"
              name='name'
              value={editData.name}
              onChange={handleOnchange}
              placeholder="Enter student name"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:outline-none dark:bg-gray-700 
              dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Std */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Std
            </label>
            <input
              name='std'
              value={editData.std}
              onChange={handleOnchange}
              type="number"
              placeholder="Enter standard"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:outline-none dark:bg-gray-700 
              dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Div */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Div
            </label>
            <select
              name='div'
              value={editData.div}
              onChange={handleOnchange}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:outline-none dark:bg-gray-700 
              dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Div</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
              <option>e</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Age
            </label>
            <input
              name='age'
              value={editData.age}
              onChange={handleOnchange}
              type="number"
              placeholder="Enter age"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:outline-none dark:bg-gray-700 
              dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Student Image URL
            </label>
            <input
              name='image'
              value={editData.image}
              onChange={handleOnchange}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:outline-none dark:bg-gray-700 
              dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium 
              rounded-lg hover:bg-blue-700 transition duration-200 
              focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Update Student
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Edit
