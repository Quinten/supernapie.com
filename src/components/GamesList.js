import React from 'react'
import GamesAPI from '../api'
import { Link } from 'react-router-dom'

const GamesList = () => (
  <div>
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
