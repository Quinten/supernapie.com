import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogsList from './BlogsList'
import Blog from './Blog'

const Blogs = () => (
  <Switch>
    <Route exact path='/blog' component={BlogsList}/>
    <Route path='/blog/:url' component={Blog}/>
  </Switch>
)


export default Blogs
