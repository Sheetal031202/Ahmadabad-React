import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [mail, setEmail] = useState("")
  const [data, setData] = useState({})

  function a(event) {
    event.preventDefault()
    // setData({ name,mail})
    // console.log(name)
    setName("")
    setEmail("")
  }

  return (
    <>
      <form action="" onSubmit={a}>

        <label htmlFor="">Name:
          <input type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />  <br />

        <label htmlFor="">E-mail:
          <input type="mail" placeholder="Enter email" value={mail}  onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />  <br />


        <button type="submit">SUBMIT</button>
      </form>

      <table border="1" style={{marginTop:"50px"}}> 
        <thead>
          <tr>
            <th>NAME</th>
            <th>{data.name}</th>

          </tr>
           <tr>
            <th>E_MAIL</th>
            <th>{data.mail}</th>

          </tr>
        </thead>
      </table>

    </>
  )
}

export default App
