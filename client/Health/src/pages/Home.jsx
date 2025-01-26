import React from 'react'
import Home1 from "../components/homecomp/Home1"
import Home2 from "../components/homecomp/Home2"
const Home = () => {
  return (
    <div className='h-full w-full overflow-hidden p-2'>
      <Home1/>
      <Home2/>
    </div>
  )
}

export default Home