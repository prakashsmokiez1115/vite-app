import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Child1 from './Child1'


function App() {

  const user1 = "Sethupathi";
  const user2 = "Prakash";

  return (
    <div>
      <h1>Hello React</h1>
      {/* <Header />
      <Footer /> */}

      <Child1

        user1={user1}
        user2={user2}
      />

    </div>
  )
}


export default App;