import React from 'react'
import "../App.css"

function Navbar() {
    return (
        <>

            <div className="nav-bg" style={{margin:"20px 0"}}>
                <div className=" navbar" style={{display:"flex",alignItems:"center" ,justifyContent:"space-between"}}>
                    <div >
                        LOGO
                    </div>
                    <div>
                        <ul className="list">
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>CONTACT</li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar