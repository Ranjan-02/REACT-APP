import React from 'react'

function ProductDetails() {
    return (
        <>
            <div>
                <div className="details-contenar">
                    <div className="img-details">

                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                    </div>
                    <div className="decription-contenar">
                        <h1>t-shert</h1>
                        <div className="para">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit facere assumenda illum laborum blanditiis?</p>
                            <p className='price'>price $ 300</p>
                        </div>
                        <div>
                            <button>Add to Cart</button>
                            <button className='buy-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails