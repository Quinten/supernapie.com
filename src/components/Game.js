import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import GamesAPI from '../api'

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
        <div>
            <h1>{game.name}</h1>
            <div id="game-description"></div>
        </div>
    )
}

export default Game
