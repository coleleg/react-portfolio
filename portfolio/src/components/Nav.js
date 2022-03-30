import React, { useEffect } from 'react';

function Nav(props) {
    const {
        page,
        setPage
    } = props;

    return (
        <header className = 'flex-row px-1'>
            <h2 onClick={() => setPage('home')}>
                Profile Pic Here
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <span onClick={() => setPage('home')}>About Me</span>
                    </li>
                    <li className='mx-2'>
                        <span onClick={() => setPage('projects')}>Projects</span>
                    </li>
                    <li className = 'mx-2'>
                        <span onClick={() => setPage('resume')}>View Resume</span>
                    </li>
                    <li className ='mx-2' >
                        <span onClick={() => setPage('contact')}>Contact Me</span>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Nav;