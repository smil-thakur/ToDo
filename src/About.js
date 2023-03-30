import React from 'react'
import github from './github.png'
import linkedin from './linkedin.png'
import port from './port.png'

function About() {
    return (
        <>
            <div className='aboutContainer'>
                <div class="card" style={{ width: "18rem", }}>
                    <div class="card-body">
                        <h5 class="card-title">Smil Raj Thakur</h5>
                        <p class="card-text">Hello, I am a Flutter and React Developer and a tech enthusiast. Check out my projects</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <a href='https://www.linkedin.com/in/smil-raj-thakur-b499471bb/' target="_blank" class="list-group-item">LinkedIn <span><img src={linkedin} width={25}></img></span></a>
                        <a href="https://github.com/smil-thakur" class="list-group-item">Github <img src={github} width={25}></img> </a>
                        <a href='https://smil-thakur.github.io/Portfolio/#/' class="list-group-item">Portfolio <img src={port} width={25}></img></a>
                    </ul>

                </div>

            </div>

        </>
    )
}

export default About