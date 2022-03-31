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
                        <h2 class='card-title'>
                            Weather Dashboard
                        </h2>
                        <p class='card-body'>
                        This Weather App allows you to view the Current Weather and 5-Day-Forecast of any city in the world using the OpenWeather API. 
                        </p>
                        <a href='https://coleleg.github.io/weather-dashboard/' class='button'>Try it out!</a>
                    </div>
                </div>
                <div class='card' id='card-2'>
                    <div class='card-content'>
                        <h2 class='card-title'>
                            GymCRM
                        </h2>
                        <p class='card-body'>
                            This app was created with the purpose of being a cheap and simple alternative to CRMs for small, club-style gym owners.
                        </p>
                        <a href='https://protected-waters-34726.herokuapp.com/' class='button'>Check it out!</a>
                    </div>
                </div>
            </container>
        </section>
    )
}

export default Projects;