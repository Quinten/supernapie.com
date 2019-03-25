import React from 'react'
import { Link } from 'react-router-dom'

const BlogsGrid = (props) => {
    return (
        <div>
            <ul className="items-list horizontal">
                {
                    props.blogs.map(p => (
                        <li key={p.url}>
                            <div className="item-tile">
                                <div className="item-info">
                                    <div className="item-title-flex">
                                        <div className="item-title">
                                            <Link to={`/blog/${p.url}`}>
                                                <span>{p.name}</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="date">{(new Date(p.date)).toLocaleDateString('en', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                    <p className="description flex-grow">{p.description}</p>
                                    <p className="read-more">
                                        <Link to={`/blog/${p.url}`}>
                                            <span>Read more</span>
                                        </Link>
                                    </p>
                                </div>
                                {/*
                                <Link to={`/blog/${p.url}`} className="thumb">
                                    <img src={'/img/'+p.url+'-thumb.jpg'} alt={p.name} title={p.name} />
                                </Link>
                                */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BlogsGrid;
