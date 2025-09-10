import React from 'react'
import "../App.css"
function About() {
    return (
        <>
            <div className='sec'>
                <div>
                    <h5>CRYPTO PLATFORM</h5>
                    <h2>Crypto Trade<br />Agency</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore dolore magna aliqua.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img
                        src={"../../public/image/i3.jpg"} height={"400px"}
                    />                </div>
            </div>
        </>
    )
}

export default About
