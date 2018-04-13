import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {

    let title = 'Make contact with Supernapie';
    let description = 'If you have any questions or feedback, you can find me on these social media channels.';

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
            <p className="ta-center">{description}</p>
            <div className="social-links">
                <ul>
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
                        <a href="https://supernapie.slack.com">
                            <span className="social-icon"><i className="fab fa-slack-hash"></i></span>
                            <span>Join the Supernapie Slack space</span>
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
