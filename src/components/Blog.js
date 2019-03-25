import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import { BlogAPI } from '../api'
import { Helmet } from 'react-helmet'

const Blog = (props) => {

    const blog = BlogAPI.get(props.match.params.url)
    if (!blog) {
        return <div>Sorry, but the blog post was not found</div>
    }

    let description = blog.description;

    fetch('/md/' + blog.url + '.md')
        .then(response => response.text())
        .then((result) => {
            description = result;
            ReactDOM.render(
                <ReactMarkdown source={description} />,
                document.getElementById('item-description')
            )
        });

    return (
        <div className="item-details">
            <Helmet>
                <title>{blog.name} | Supernapie blog</title>
                <meta property="og:title" content={blog.name+' | Supernapie blog'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://supernapie.com/blog/'+blog.url} />
                <meta name="description" content={blog.description} />
                <meta property="og:description" content={blog.description} />
                {blog.poster ? (
                <meta property="og:image" content={'https://supernapie.com/img/'+blog.url+'-poster.jpg'} />
                ) : (
                <meta property="og:image" content={'https://supernapie.com/img/supernapie-poster.jpg'} />
                )}
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="fb:app_id" content="1418768124974325" />
            </Helmet>

            {blog.poster ? (
            <div className="item-poster">
                <img src={'/img/'+blog.url+'-poster.jpg'} alt={blog.name} title={blog.name} />
            </div>
            ) : (
            ''
            )}
            <div className="item-title-flex">
                <div className="item-title">
                    <h1>{blog.name}</h1>
                </div>
            </div>
            <p className="blog-date">{(new Date(blog.date)).toLocaleDateString('en', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            <div id="item-description"></div>
        </div>
    )
}

export default Blog
