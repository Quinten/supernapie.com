import React from 'react'
import GamesAPI from '../api'

const Game = (props) => {
    const game = GamesAPI.get(props.match.params.url)
    if (!game) {
        return <div>Sorry, but the game was not found</div>
    }
    return (
        <div>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
        </div>
    )
}

export default Game
