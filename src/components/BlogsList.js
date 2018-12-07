import React from 'react'
import { Helmet } from 'react-helmet'
import { BlogAPI } from '../api'
import BlogsGrid from './BlogsGrid'

const BlogsList = () => {
    let title = 'The Supernapie Blog';
    let description = 'Here on the blog you can find notes and stories about my game developing adventures. Some notes are very technical, so be warned.';
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
            <BlogsGrid blogs={BlogAPI.all()} />
        </div>
    );
}

export default BlogsList
