import React, { useEffect } from 'react';



function Nav(props) {
    const {
        page,
        setPage
    } = props;

    return (
        <header>
            <div class='inner'>
                <div class="profile">
                    <h2 onClick={() => setPage('home')}>
                        Coleman Leggett
                        
                    </h2>
                </div>

            <nav>
                    <li>
                        <span onClick={() => setPage('home')}>About Me</span>
                    </li>
                    <li>
                        <span onClick={() => setPage('projects')}>Projects</span>
                    </li>
                    <li>
                        <span onClick={() => setPage('resume')}>Resume</span>
                    </li>
                    <li>
                        <span onClick={() => setPage('contact')}>Contact Me</span>
                    </li>
            </nav>
            </div>
        </header>
    )
}

export default Nav;