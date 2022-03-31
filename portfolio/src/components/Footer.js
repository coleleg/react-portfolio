import React, { useEffect } from 'react';
import ghIcon from '../assets/icons/GitHub-Mark-32px.png';
import liIcon from '../assets/icons/LinkedIn-Logo.png';

function Footer(props) {
    const {
        page,
        setPage
    } = props;

    return (
        <footer>
            <div class='inner'>
                    <nav>
                        <li>
                            <span><a href='https://github.com/coleleg'><img alt='github icon' src={ghIcon}></img></a></span>
                        </li>
                        <li>
                        <span><a href='https://www.linkedin.com/in/charles-leggett-79b38b8a/'><img alt='github icon' src={liIcon}></img></a></span>
                        </li>
                    </nav>
            </div>
        </footer>
    )
}

export default Footer;