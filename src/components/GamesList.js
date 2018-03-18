import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'

const GamesList = () => (
  <div>
    <h1 className="ta-center"><i className="fas fa-gamepad"></i> <span>Games</span></h1>
    <ul>
      {
        GamesAPI.all().map(g => (
          <li key={g.url}>
            <Link to={`/games/${g.url}`}>{g.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default GamesList
