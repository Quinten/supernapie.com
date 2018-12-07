import React from 'react'
import { Link } from 'react-router-dom'

const GamesGrid = (props) => {
    return (
        <div>
            <ul className="games-list">
                {
                    props.games.map(g => (
                        <li key={g.url}>
                            <div className="game-tile" itemScope itemType="http://schema.org/VideoGame">
                                <Link to={`/games/${g.url}`} className="thumb" itemProp="url">
                                    <img src={'/img/'+g.url+'-thumb.jpg'} alt={g.name} title={g.name} itemProp="image" />
                                </Link>
                                <div className="game-title-flex">
                                    <div className="game-title">
                                        <Link to={`/games/${g.url}`} itemProp="url">
                                            <span itemProp="name">{g.name}</span>
                                        </Link>
                                    </div>
                                    <div className="game-specs">
                                        {g.specs.gamepad && <span title="Gamepad"><i className="fas fa-gamepad"></i></span>}
                                        {g.specs.mobile && <span title="Mobile"><i className="fas fa-mobile-alt"></i></span>}
                                        {g.specs.desktop && <span title="Desktop"><i className="fas fa-desktop"></i></span>}
                                    </div>
                                </div>
                                <p itemProp="description" className="description">{g.description}</p>
                                <p className="read-more flex-grow">
                                    <Link to={`/games/${g.url}`}>
                                        <span>Read more</span>
                                    </Link>
                                </p>
                                <p className="ta-center play-more">
                                    <a className="btn game-btn" href={(g.link) ? g.link : 'https://'+g.url+'.supernapie.com'} itemProp="installUrl">
                                        <span>{g.cta}</span>
                                    </a>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default GamesGrid
