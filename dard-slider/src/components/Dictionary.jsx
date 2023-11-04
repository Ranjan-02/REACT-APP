
import React, { useState, useEffect } from 'react';

function Dictionary() {
    const [inputValue, setInputValue] = useState('dog');
    const [data, setData] = useState(null);

    async function fetchData(word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
            setData({ error: 'An error occurred while fetching data.' });
        }
    }

    useEffect(() => {
        // Fetch data when the component mounts (initial page load)
        fetchData(inputValue);
    }, []); // Empty dependency array means it runs only once, on mount

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <div className="bg-green-700 text-black p-4">
                <h1 className="py-2 text-3xl font-bold">Dictionary Component</h1>

                <input
                    type="text"
                    placeholder="Enter text"
                    className="bg-black-700 outline-none p-2"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="bg-blue-800 text-white p-2 active:bg-gray-700 m-1" onClick={() => fetchData(inputValue)}>
                    Enter
                </button>
            </div>
            <div>
                {data ? (
                    data[0] ? (
                        <>
                            <h3>Word: <span>{data[0].word}</span></h3>
                            {data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions[0] ? (
                                <h3>Description: <span>{data[0].meanings[0].definitions[0].definition}</span></h3>
                            ) : (
                                <p>No description available.</p>
                            )}
                            <h3>Part of Speech: <span>{data[0].meanings[0].partOfSpeech}</span></h3>
                        </>
                    ) : (
                        <p>No data available for the entered word.</p>
                    )
                ) : (
                    <p>Loading...</p> // Display a loading message while data is being fetched
                )}
            </div>
        </>
    );
}

export default Dictionary;
