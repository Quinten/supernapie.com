import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import { GamesAPI } from '../api'
import { Helmet } from 'react-helmet'

const Game = (props) => {

    const game = GamesAPI.get(props.match.params.url)
    if (!game) {
        return <div>Sorry, but the game was not found</div>
    }

    let description = game.description;

    fetch('/md/' + game.url + '.md')
        .then(response => response.text())
        .then((result) => {
            description = result;
            ReactDOM.render(
                <ReactMarkdown source={description} />,
                document.getElementById('game-description')
            )
        });

    return (
        <div itemScope itemType="http://schema.org/VideoGame" className="game-details">
            <Helmet>
                <title>{game.name} - a Supernapie game</title>
                <meta property="og:title" content={game.name+' - a Supernapie game'} />
                <meta property="og:type" content="game" />
                <meta property="og:url" content={'https://supernapie.com/games/'+game.url} />
                <meta name="description" content={game.description} />
                <meta property="og:description" content={game.description} />
                <meta property="og:image" content={'https://supernapie.com/img/'+game.url+'-poster.jpg'} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="fb:app_id" content="1418768124974325" />
            </Helmet>
            <div className="game-poster">
                <a href={(game.link) ? game.link : 'https://'+game.url+'.supernapie.com'} itemProp="installUrl">
                    <img src={'/img/'+game.url+'-poster.jpg'} alt={'Play '+game.name} title={game.cta + ' ' + game.name} itemProp="image" />
                </a>
            </div>
            <div className="game-btn-wrapper">
                <a className="btn game-btn" href={(game.link) ? game.link : 'https://'+game.url+'.supernapie.com'} itemProp="installUrl">
                    <i className="fas fa-gamepad fa-lg"></i>
                    <span>{game.cta} game</span>
                </a>
            </div>
            <div className="game-title-flex">
                <div className="game-title">
                    <h1 itemProp="name">{game.name}</h1>
                </div>
                <div className="game-specs">
                    {game.specs.gamepad && <span title="Gamepad"><i className="fas fa-gamepad"></i></span>}
                    {game.specs.mobile && <span title="Mobile"><i className="fas fa-mobile-alt"></i></span>}
                    {game.specs.desktop && <span title="Desktop"><i className="fas fa-desktop"></i></span>}
                </div>
            </div>
            <div id="game-description" itemProp="description"></div>
        </div>
    )
}

export default Game
