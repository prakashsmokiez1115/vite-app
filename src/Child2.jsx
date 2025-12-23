import React from 'react'
import Child3 from './Child3'

const Child2 = (c2) => {
    return (
        <div>
            <u><h1>Child-2</h1></u>
            <h2>{c2.user1}</h2>
            <h2>{c2.user2}</h2>

            <Child3

                user1={c2.user1}
                user2={c2.user2}

            />
        </div>
    )
}

export default Child2