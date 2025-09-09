import React from 'react'

function Footer() {
    return (
        <>
            <div className="foot-bg" style={{margin:"100px 0"}}>
                <div className=" footer" >
                    <div className="w-4">
                        <ul><h3>Company</h3>
                            <li>About us</li>
                            <li>Our services</li>
                            <li>Primary Policy</li>
                            <li>Programs</li>
                        </ul>

                    </div>


                    <div className="w-4">
                        <ul><h3>Get Help</h3>
                            <li>FAQs</li>
                            <li>Shipping</li>
                            <li>Flutter</li>
                            <li>Payment</li>
                            <li>Order</li>
                        </ul>
                    </div>

                    <div className="w-4">
                        <ul><h3>Online Shop</h3>
                            <li>Watch</li>
                            <li>Bag</li>
                            <li>Shoes</li>
                            <li>Dress</li>
                        </ul>
                    </div>

                    <div className="w-4">
                        <ul><h3>Follow us</h3>
                            <li><a href="#">FACEBOOK</a></li>
                            <li><a href="#">GMAIL</a></li>
                            <li><a href="#">TWITTER</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer