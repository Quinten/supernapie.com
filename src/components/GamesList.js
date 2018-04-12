import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'

const GamesList = () => {
    document.title = 'The Supernapie Games Catalog';

    document.querySelector('meta[name="description"]').setAttribute("content", 'This is the curated list of Supernapie games. Take your time to play them all. Click on a tile to get more info of about the game and play them right here in your browser.');

    return (
        <div>
            <h1 className="ta-center"><i className="fas fa-gamepad"></i> <span>Games</span></h1>
            <p>This is the curated list of Supernapie games. Take your time to play them all. Click on a tile to get more info of about the game and play them right here in your browser.</p>
            <ul className="games-list">
                {
                    GamesAPI.all().map(g => (
                        <li key={g.url}>
                            <div className="game-tile">
                                <Link to={`/games/${g.url}`} className="thumb">
                                    <img src={'/img/'+g.url+'-thumb.jpg'} alt={g.name} title={g.name} />
                                </Link>
                                <Link to={`/games/${g.url}`}>
                                    <span>{g.name}</span>
                                </Link>
                                <p>{g.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default GamesList
