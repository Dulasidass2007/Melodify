import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Songcard from '../Components/SongCard/Songcard'
function Home() {
  return (
    <>
      
        <Navbar/>
        <div className='Songcard'>
        
        <Songcard/>
        <Songcard/>
        </div>
    </>
  )
}

export default Home