import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a className='head'>Explore !</a>
                    <a href='/login'>Login</a>
                    <a href='/'>Signup</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar