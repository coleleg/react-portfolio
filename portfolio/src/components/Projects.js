import React from 'react';

function Projects(props) {
    return (
        <section class='projects'>
            <div class='projects-header'>
                <h1>Projects</h1>
            </div>
            <container class='card-container'>
                <div class='card' id='card-1'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            Weather Dashboard
                        </h3>
                        <p class='card-body'>
                        Weather Dashboard allows you to view the Current Weather and 5-Day-Forecast of any city using the OpenWeather API. 
                        </p>
                        <a href='https://coleleg.github.io/weather-dashboard/' class='button'>Stay Dry!</a>
                        <a href='https://github.com/coleleg/weather-dashboard' class='button'>GitHub</a>
                    </div>
                </div>
                <div class='card' id='card-2'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            GymCRM
                        </h3>
                        <p class='card-body'>
                            GymCRM was created with the purpose of being a cheap and simple alternative to CRMs for small, club-style gym owners.
                        </p>
                        <a href='https://protected-waters-34726.herokuapp.com/' class='button'>Make Gains!</a>
                        <a href='https://github.com/coleleg/gym-crm' class='button'>GitHub</a>
                    </div>
                </div>
                <div class='card' id='card-3'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            Team Page Generator
                        </h3>
                        <p class='card-body'>
                        This app prompts users with questions about their employees and generates an HTML page displaying individual cards for each employee.
                        </p>
                        <a href='https://drive.google.com/file/d/1qlB_rOKy05aTOW_Cvtm2hhgPLZRllKVA/view' class='button'>Demo</a>
                        <a href='https://github.com/coleleg/team-page-generator' class='button'>GitHub</a>
                    </div>
                </div>
                <div class='card' id='card-4'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            Password Generator
                        </h3>
                        <p class='card-body'>
                            This is one of my first applications.  It showcases understanding of JavaScript fundamentals.  Simple, yet effective.
                        </p>
                        <a href='https://coleleg.github.io/password-generator/' class='button'>Stay Secure</a>
                        <a href='https://github.com/coleleg/password-generator/' class='button'>GitHub</a>
                    </div>
                </div>
                <div class='card' id='card-5'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            Note Taker
                        </h3>
                        <p class='card-body'>
                        Take notes with Express! This is a simple application that allows users to create, save and delete notes with ease.
                        </p>
                        <a href='https://young-island-76408.herokuapp.com/' class='button'>Take Note!</a>
                        <a href='https://github.com/coleleg/note-taker' class='button'>GitHub</a>
                    </div>
                </div>
                <div class='card' id='card-6'>
                    <div class='card-content'>
                        <h3 class='card-title'>
                            GymCRM
                        </h3>
                        <p class='card-body'>
                            This app was created with the purpose of being a cheap and simple alternative to CRMs for small, club-style gym owners.
                        </p>
                        <a href='https://protected-waters-34726.herokuapp.com/' class='button'>Check it out!</a>
                        <a href='https://github.com/coleleg/gym-crm' class='button'>GitHub</a>
                    </div>
                </div>
            </container>
        </section>
    )
}

export default Projects;