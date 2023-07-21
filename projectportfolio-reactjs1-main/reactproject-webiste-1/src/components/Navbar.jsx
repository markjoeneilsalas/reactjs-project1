import React from 'react'

import '../Style.css'

function Navbar() {
  return (
    <div className='nav'>
        <h2>Robopri</h2>
        <ul className='navlink'>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
        </ul>
        <button>Contact</button>
    </div>
  )
}

export default Navbar