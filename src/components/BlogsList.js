import React from 'react'
import { BlogAPI } from '../api'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const BlogsList = () => {
    let title = 'The Supernapie Blog';
    let description = 'Here on the blog you can find notes and stories about my game developing adventures.';
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://supernapie.com/blog'} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={'https://supernapie.com/img/supernapie-poster.jpg'} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="fb:app_id" content="1418768124974325" />
            </Helmet>
            <h1 className="ta-center"><i className="fas fa-pencil-alt"></i> <span>Blog</span></h1>
            <p>{description}</p>
            <ul className="games-list">
                {
                    BlogAPI.all().map(p => (
                        <li key={p.url}>
                            <div className="game-tile">
                                <Link to={`/blog/${p.url}`} className="thumb">
                                    <img src={'/img/'+p.url+'-thumb.jpg'} alt={p.name} title={p.name} />
                                </Link>
                                <Link to={`/blog/${p.url}`}>
                                    <span>{p.name}</span>
                                </Link>
                                <p className="date">{(new Date(p.date)).toLocaleDateString('en', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                <p>{p.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BlogsList
