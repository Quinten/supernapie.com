import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import GamesAPI from '../api'
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
        <div itemScope itemType="http://schema.org/VideoGame">
            <Helmet>
                <title>{game.name}</title>
                <meta name="description" content={game.description} />
                <meta name="og:image" content={'/img/'+game.url+'-poster.jpg'} />
            </Helmet>
            <div className="game-poster">
                <a href={'https://'+game.url+'.supernapie.com'} itemProp="installUrl">
                    <img src={'/img/'+game.url+'-poster.jpg'} alt={'Play '+game.name} title={'Play '+game.name} itemProp="image" />
                </a>
            </div>
            <div className="game-btn-wrapper">
                <a className="btn game-btn" href={'https://'+game.url+'.supernapie.com'} itemProp="installUrl">
                    <i className="fas fa-gamepad fa-lg"></i>
                    <span>Play game</span>
                </a>
            </div>
            <h1 itemProp="name">{game.name}</h1>
            <div id="game-description" itemProp="description"></div>
        </div>
    )
}

export default Game
