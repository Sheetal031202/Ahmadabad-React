// topic name

// 1.....event handles
// 2..........event handler with parameter pass
// 3/............conditional rendering

// 1...event handeler
// agar count ma setcount(count+1) 5 times copy paste karish to bhi 5 no increment thase nay so "setCount(()=>setcount(count+1)"
// aavi rite retun kari ne copy paste karine karsu to thase5 thi increase")

// ********************************************************************************************************************************************************************************************************************
// code-------- 1 start-----------------------------------------------------
// import React, { useState } from 'react'

// function App() {

//   let [count, setCount] = useState(0)

//   // aaya variable ma a lakhiye ke kai bhi lakhiye chale
//   function add() {

// setCount((a)=>a+1)
// setCount((a)=>a+1)
// setCount((a)=>a+1)


//   }

//   function less() {

// setCount((count)=>count-1)
// setCount((count)=>count-1)
// setCount((count)=>count-1)


//   }
//   return (
//     <>
//       <h2>Counter App</h2>

//       <button onClick={add}>INCEMENET</button>
//       <span style={{ margin: "0 15px" }}>{count}</span>
//       <button onClick={less}>DECEMENET</button>
//     </>
//   )
// }

// export default App
// code---------1 over----------------------------------------------------

// ********************************************************************************************************************************************************************************************************************

// code--------2 start-----------------------------------------------------

// import React, { useState } from 'react'

// function App() {

//   let [count, setCount] = useState(0)

//   function add(n) {
//     setCount(count + n)

//   }

//   function less(n) {
//     if (count > 0) {
//       setCount(count - n);

//     }

//   }
//   return (
//     <>
//       <h2>Counter App</h2>

//       <button onClick={() => add(5)}>INCEMENET</button>
//       <span style={{ margin: "0 15px" }}>{count}</span>
//       <button onClick={() => less(5)}>DECEMENET</button>
//     </>
//   )
// }

// export default App


// code---------2 over----------------------------------------------------


// ********************************************************************************************************************************************************************************************************************


// code--------3 start-----------------------------------------------------

import React, { useEffect, useState } from 'react'

function App() {
    //   const [data, setData] = useState([]);
    //   const [loading, setLoading] = useState(true);

    //   useEffect(() => {
    //     // simulate API call
    //     setTimeout(() => {
    //       setData(["one", "two", "three"]);
    //       setLoading(false);
    //     }, 3000);
    //   }, []);

    //   return (
    //     <>
    //       {/* conditional rendering */}
    //       {loading && <h2>...loading</h2>}
    //       {!loading && data.map((item, index) => (
    //         <h1 key={index}>{item}</h1> 
    //       ))}
    //     </>
    //   );


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(["one", "two", "three"]);
            setLoading(false)
        }, 2000),
            console.log("i m effect")
    }
        , [])
    return (
        <>
            <div>
                {loading ? <h2>loading.....</h2> : data.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))}
            </div>
        </>
    )

}



export default App;



// code---------3 over----------------------------------------------------
