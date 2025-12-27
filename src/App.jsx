import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Child1 from './Child1'
import State from './State'
import ListKeys from './ListKeys'


export let userData = createContext();

function App() {

  const user1 = "Prakash";
  const user2 = "Sethu";
  const user3 = "Shivash";
  const user4 = "Meiarasu";

  return (
    <div>
      <u><h1>Hello React</h1></u>
      {/* <Header />
      <Footer /> */}

      {/* <Child1

        user1={user1}
        user2={user2}
      /> */}


      {/* <State /> */}

      {/* <ListKeys /> */}

      <userData.Provider value={{ user1, user2, user3, user4 }}>
        <Child1 />
      </userData.Provider>
    </div>
  )
}


export default App;