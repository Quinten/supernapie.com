import React from 'react'
import { GamesAPI } from '../api'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

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
            <ul className="games-list">
                {
                    GamesAPI.all().map(g => (
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
                                    <a className="btn game-btn" href={'https://'+g.url+'.supernapie.com'} itemProp="installUrl">
                                        <span>Play</span>
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

export default GamesList
