import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const GamesList = () => {
    return (
        <div>
            <Helmet>
                <title>{'The Supernapie Games Catalog'}</title>
                <meta name="description" content={'This is the curated list of Supernapie games. Take your time to play them all. Click on a tile to get more info about the game and play them right here in your browser.'} />
                <meta name="og:image" content={'/img/games-banner-cropped.jpg'} />
            </Helmet>
            <h1 className="ta-center"><i className="fas fa-gamepad"></i> <span>Games</span></h1>
            <p>This is the curated list of Supernapie games. Take your time to play them all. Click on a tile to get more info about the game and play them right here in your browser.</p>
            <ul className="games-list">
                {
                    GamesAPI.all().map(g => (
                        <li key={g.url}>
                            <div className="game-tile" itemScope itemType="http://schema.org/VideoGame">
                                <Link to={`/games/${g.url}`} className="thumb" itemProp="url">
                                    <img src={'/img/'+g.url+'-thumb.jpg'} alt={g.name} title={g.name} itemProp="image" />
                                </Link>
                                <Link to={`/games/${g.url}`} itemProp="url">
                                    <span itemProp="name">{g.name}</span>
                                </Link>
                                <p itemProp="description">{g.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default GamesList
