import React from 'react'
import { useLoaderData } from 'react-router'

function HomePage() {
    const homeData=useLoaderData()
    console.log(homeData)

  return (
       <div className="min-h-screen w-full m-5 bg-gray-900 text-white p-6">
      <h3 className="text-2xl font-semibold mb-6">HOME</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {homeData.map((e) => (
          <div
            key={e.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold"> Name :   {e.name}</h2>
              <p className="text-gray-300 mt-1">Std :   {e.std}</p>
              <p className="text-gray-300 mt-1">Div :   {e.div}</p>
              <p className="text-gray-300 mt-1">Age :   {e.age}</p>

              

              {/* <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg text-sm">
                View Details
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
