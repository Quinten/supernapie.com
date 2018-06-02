import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {

    let title = 'Make contact with Supernapie';
    let description = "Supernapie's mission is to make great games, but great games can not be made without feedback. On social media i organise polls where you can vote for new features and other stuff. So you can help making decisions for the games and make them more fun simply by clicking a button. Or if you have ideas for games that you want me to make, i'm also open to that.";

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://supernapie.com/contact'} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={'https://supernapie.com/img/supernapie-poster.jpg'} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="fb:app_id" content="1418768124974325" />
            </Helmet>
            <h1 className="ta-center"><i className="fas fa-rocket"></i> <span>Make contact</span></h1>
            <p>{description}</p>
            <div className="social-links">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/supernapie/">
                            <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                            <span>Like Supernapie on Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/supernapie">
                            <span className="social-icon"><i className="fab fa-twitter"></i></span>
                            <span>Follow Supernapie on Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/supernapie">
                            <span className="social-icon"><i className="fab fa-instagram"></i></span>
                            <span>View Supernapie on Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Quinten">
                            <span className="social-icon"><i className="fab fa-github-alt"></i></span>
                            <span>Checkout my code on Github</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact
