import React from 'react'
import Logo from './Logo'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
      <div>
        <Helmet>
            <title>{'Supernapie: Play free web games'}</title>
            <meta name="description" content={'Play free web games on mobile and desktop. Supernapie games are carefully built by myself, Quinten Clause.'} />
            <meta name="og:image" content={'/img/supernapie-poster.jpg'} />
        </Helmet>
        <div className="game-poster">
            <img src={'/img/supernapie-poster.jpg'} alt="Supernapie test devices" />
        </div>
        <h1 className="ta-center"><Logo /> <span>Supernapie</span></h1>
        <h2 className="ta-center">Play free web games on mobile and desktop.</h2>
        <p>Supernapie games are carefully built by myself, Quinten Clause. I am an animator and web developer that makes web games as a hobby project. Designing game mechanics and the freedom of coding for the web is my peanutbutter jam.</p>
        <p>Most gaming portals and app stores are overcrowded these days and here it is just me and my goofy games. Supernapie is not a big studio, but just wants to be a cosy space for web gaming, where i can do whatever i want.</p>
        <div className="game-banner">
            <a href={'/games'} title={'Check out the Supernapie games catalog'}>
                <img src={'/img/games-banner-cropped.jpg'} alt={'Check out the Supernapie games catalog'} />
                <div className="game-banner-text">
                    <h2>Check out the Supernapie games catalog <span className="arrow">-&gt;</span></h2>
                </div>
            </a>
        </div>
        <h3><i className="fab fa-html5"></i> Made for the browser</h3>
        <p>All games are made with common web technologies like html5 and javascript and with a little help from a framework called Phaser. So each game can be played in a web browser and will work on both desktop and mobile phones. There is no need to install anything.</p>
        <p>Touch screen input is supported for all of them. On desktop you can play with mouse or keyboard. Some games even support game controllers for the hardcore players amongst you.</p>
        <h3><i className="fas fa-mobile-alt"></i> Did you know you can add any Supernapie game to your phone's homescreen?</h3>
        <p>Mobile web browsers like Safari and Chrome have an option to add a webpage to the homescreen of your phone. If you opened a Supernapie game in the browser of your mobile phone you can add it to your homescreen and you will get a nice icon. If you click the icon the game will open fullscreen and behave more like an app instead of a webpage.</p>
      </div>
    )
}

export default Home
