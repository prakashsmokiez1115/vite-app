import React from 'react'
import Child2 from './Child2'

const Child1 = (c1) => {
    return (
        <div>
            <u><h1>Child-1</h1></u>
            <h2>{c1.user1}</h2>
            <h2>{c1.user2}</h2>

            <Child2

                user1={c1.user1}
                user2={c1.user2}
            />
        </div>
    )
}

export default Child1