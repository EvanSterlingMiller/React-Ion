import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar'

function Header() {
    return(
        <header className='flex-row px-1'>
            <h1>
            <Link to='/'>Evan Sterling Miller</Link> 
            </h1>
            <NavBar></NavBar>
        </header>
    )
}
export default Header