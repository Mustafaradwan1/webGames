import React from 'react'
import Products from '../Products/Products'


export default function Home() {
  return <>
  <header className='w-100 bg-dark'>
      <div className="box heading p-5 text-center">
        <h2>Find & track the best <span className='text-primary'>free-to-play</span> games!</h2>
        <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <button>browse games</button>
      </div>
    <Products/>
  </header>
  </>
}
