import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'

const GamesList = () => {
    document.title = 'Supernapie: Games Catalog';
    return (
        <div>
            <h1 className="ta-center"><i className="fas fa-gamepad"></i> <span>Games</span></h1>
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
