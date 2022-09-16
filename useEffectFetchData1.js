import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectFetchData1() {
    const [info, setInfo] = useState([]) // Array of obj
    const [id, setId] = useState(1)
    const [btnClickId, setBtnId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnClickId}`).
            then(res => setInfo(res.data)).
            catch(err => console.log(err))
    }, [btnClickId]) // pass dependency to see the changes in input in real time

    const handleClick = () => {
        setBtnId(id)
    }
    // 2nd way we're using button to fetch the data
    return (
        <div>
            <label>Enter id: </label>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button type='submit' onClick={handleClick}>Fetch Post</button>
            {
                <li key={btnClickId}>{info.title}</li>
            }
        </div>
    )
}

export default UseEffectFetchData1