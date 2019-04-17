import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Games from './Games'
import Blogs from './Blogs'
import Contact from './Contact'

const Main = () => (
    <main>
        <div className="content-wrapper">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/games' component={Games}/>
                <Route path='/blog' component={Blogs}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </div>
        <p>&nbsp;</p>
    </main>
)

export default Main
