import React from 'react'
import { navlinks } from '../constants';


 const NavBar = () => {
  return (
        <header>
            <nav className=''>
                {/* <img src='' alt="logo" />  */} <h1>Search.bazzar</h1>
                <ul className='hidden md:flex'>
                    {navlinks.map(({label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
  )
}

export default NavBar; 