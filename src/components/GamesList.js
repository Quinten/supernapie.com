import React from 'react'
import { Helmet } from 'react-helmet'
import { GamesAPI } from '../api'
import GamesGrid from './GamesGrid'

const GamesList = () => {
    let title = 'The Supernapie Games Catalog';
    let description = 'This is the curated list of Supernapie games. Take your time to play them all. Click on a tile to get more info about the game and play them right here in your browser.';
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://supernapie.com/games'} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={'https://supernapie.com/img/games-banner-cropped.jpg'} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="fb:app_id" content="1418768124974325" />
            </Helmet>
            <h1 className="ta-center"><i className="fas fa-gamepad"></i> <span>Games</span></h1>
            <p>{description}</p>
            <GamesGrid games={GamesAPI.all()} />
        </div>
    );
}

export default GamesList
