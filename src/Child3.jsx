import React, { useContext } from 'react'
import { userData } from './App'



const Child3 = (c3) => {

    let getData3 = useContext(userData);

    return (
        <div>
            <u><h1>Child-3</h1></u>
            <h2>{c3.user1}</h2>
            <h2>{c3.user2}</h2>

            <ul style={{ listStyle: "square" }}>
                <li>{getData3.user1}</li>
                <li>{getData3.user2}</li>
                <li>{getData3.user3}</li>
                <li>{getData3.user4}</li>
            </ul>

        </div>
    )
}

export default Child3