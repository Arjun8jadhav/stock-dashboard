import React from 'react'
import '../styles/navbar.scss'
export const Navbar = () => {
  return (
    <div className='nav-head'>
        <div className='nav-log'>
            <h2>Stock-Insights</h2>
        </div>
        <div className='search-functionality'>
            <input type='text' placeholder='enter stock'></input>
            <button>Search</button>
        </div>
    </div>
  )
}
