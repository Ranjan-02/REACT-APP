import React, { useState, useEffect } from 'react'

function main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const resp = await fetch(`https://fakestoreapi.com/products`)
                const respJson = await resp.json()
                setProducts(respJson)
                console.log(respJson);

            }
            fetchData()
        } catch (error) {
            console.log(error);
        }

    }, []
    )
    return (
        <>
            <h1 className='heading'>Products</h1>
            <div className='card-contenar'>
                {
                    products.map(product => (

                        <div className='contenar' key={product.id}>
                            <div className='card'>
                                <div className='img-box'>
                                    <img src={product.image} alt="" />
                                </div>
                                <div>
                                    <h3>{product.title}</h3>
                                    <h3>{product.category}</h3>
                                    <h3> $ {product.price}</h3>
                                    <button>Add to Cart</button>
                                </div>
                            </div>

                        </div>

                    ))
                }




            </div>

        </>
    )
}

export default main