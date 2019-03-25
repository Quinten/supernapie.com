import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from './Logo'
import { GamesAPI } from '../api'
import GamesGrid from './GamesGrid'
import { BlogAPI } from '../api'
import BlogsGrid from './BlogsGrid'

const Home = () => {
    let title = 'Supernapie: Primordial Web Game Soup';
    let description = 'Play free web games on mobile and desktop. Supernapie games are carefully built by myself, Quinten Clause.';
    return (
      <div className='homepage'>
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={'https://supernapie.com'} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'https://supernapie.com/img/supernapie-poster.jpg'} />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="640" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="fb:app_id" content="1418768124974325" />
        </Helmet>
        <div className="item-poster">
            <img src={'/img/supernapie-world.jpg'} alt="Supernapie world" />
        </div>
        <h1 className="ta-center"><Logo /> <span>Supernapie</span></h1>
        <h2 className="ta-center">Primordial Web Game Soup</h2>
        <GamesGrid games={GamesAPI.latest()} />
        <p className="ta-center">
            <Link to={'/games'} className="btn">
                <i className="fas fa-gamepad"></i>
                <span>View all games</span>
            </Link>
        </p>
        <h2 className="ta-center">Fried Blog Noodles</h2>
        <BlogsGrid blogs={BlogAPI.latest()} />
        <p className="ta-center">
            <Link to={'/blog'} className="btn">
                <i className="fas fa-pencil-alt"></i>
                <span>View all blog posts</span>
            </Link>
        </p>
      </div>
    )
}

export default Home
