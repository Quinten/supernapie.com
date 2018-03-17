import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'

const Game = (props) => {
    const game = GamesAPI.get(props.match.params.url)
    if (!game) {
        return <div>Sorry, but the game was not found</div>
    }
    return (
        <div>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <Link to='/games'>Back</Link>
        </div>
    )
}

export default Game
