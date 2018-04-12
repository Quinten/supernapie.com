import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import GamesAPI from '../api'

const Game = (props) => {

    const game = GamesAPI.get(props.match.params.url)
    if (!game) {
        return <div>Sorry, but the game was not found</div>
    }

    document.title = game.name + ' - a Supernapie game';

    let description = game.description;

    document.querySelector('meta[name="description"]').setAttribute("content", description);

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
        <div>
            <div className="game-poster">
                <a href={'https://'+game.url+'.supernapie.com'}>
                    <img src={'/img/'+game.url+'-poster.jpg'} alt={'Play '+game.name} title={'Play '+game.name} />
                </a>
            </div>
            <div className="game-btn-wrapper">
                <a className="btn game-btn" href={'https://'+game.url+'.supernapie.com'}>
                    <i className="fas fa-gamepad fa-lg"></i>
                    <span>Play game</span>
                </a>
            </div>
            <h1>{game.name}</h1>
            <div id="game-description"></div>
        </div>
    )
}

export default Game
