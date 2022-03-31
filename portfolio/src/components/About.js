import React from 'react';

function About() {
    return(
        <section>
            <h1>
                My Story
            </h1>
            <div class='card'>
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
        </section>
    )
}

export default About;