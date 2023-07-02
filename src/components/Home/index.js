import React from 'react'
import {Link} from 'react-router-dom'
import Professional from '../../assets/images/Professional'

function Home() {
    return(
        <section className='home my-5'>
            <div className='title'>
                <div classname="portrait-photo">
                    <img src={Professional} alt='Professional photo' />
                </div>
                <p>My Portfolio</p>
                <Link to='portfolio'>
                    <button>View my work!</button>
                </Link>
            </div>
        </section>
    )
}

export default Home