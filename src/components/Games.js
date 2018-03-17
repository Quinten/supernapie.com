import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GamesList from './GamesList'
import Game from './Game'

const Games = () => (
  <Switch>
    <Route exact path='/games' component={GamesList}/>
    <Route path='/games/:url' component={Game}/>
  </Switch>
)


export default Games
