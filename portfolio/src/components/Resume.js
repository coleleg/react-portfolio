import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';

function Resume () {
    const saveFile = () => {
        saveAs(
            'https://docs.google.com/document/d/e/2PACX-1vRJ8Tn7jJLXDNcgLkJYPGgm5wDpUzbJQpWgVye73zQAW1qu3o97lH3l-jAqDOAzLziL3o7vhEDQ7ety/pub',
            'resume.doc'
        )
    }
    return (
        <section>
            <h1 class='resume-h1'>Resume</h1>
            <div class='dl-container'>
                <button class='dl-button' onClick={saveFile}>Download</button>
            </div>
        </section>
    )
}

export default Resume;