import React, { useState } from 'react'

function Dictionary() {

    const [data, setData] = useState([])

    async function getData(word) {
        console.log('button Click');

        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        data = await data.json()
        console.log(data);

    }

    let word = "dog"
    function hendleChange(e) {
        console.log(e);
    }
    return (
        <>
            <div className='bg-green-700 text-black p-4'>
                <h1 className="py-2 text-3xl font-bold">Dictionary Component</h1>

                <input type="text" placeholder='Enter text' className="bg-black-700 outline-none p-2" value={word} onChange={hendleChange} />
                <button className="bg-blue-800 text-white p-2 active:bg-gray-700 m-1" onClick={getData}>Enter</button>
            </div>
            <div>
                <h3>Word: <span>Dog</span></h3>
                <h3>Discription: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quo.</span></h3>
                <h3>Parts of Speech : <span>Naun</span></h3>

            </div>

        </>
    )
}

export default Dictionary;