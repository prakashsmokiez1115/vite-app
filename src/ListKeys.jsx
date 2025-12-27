import React, { useState } from 'react'

// this is called side effect import
import "./ListKeys.css";


const ListKeys = () => {

  const [actor, setActor] = useState(["Ajith", "Vijay", "Surya", "Rajini", "Kamal", "Vikram", "Dhanush", "STR"]);

  return (
    <div>
      {

        actor.map((actorName, index) => {
          return (
            <ol key={index} id='olStyle'>
              <li>{actorName}</li>
            </ol>
          )
        })

      }
    </div>
  )
}

export default ListKeys