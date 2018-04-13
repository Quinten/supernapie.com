import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {

    return (
        <div>
            <Helmet>
                <title>{'Make contact with Supernapie'}</title>
                <meta name="description" content={'If you have any questions or feedback, you can find me on these social media channels.'} />
                <meta property="og:image" content={'/img/supernapie-poster.jpg'} />
            </Helmet>
            <h1 className="ta-center"><i className="fas fa-rocket"></i> <span>Make contact</span></h1>
            <p className="ta-center">If you have any questions or feedback, you can find me on these social media channels.</p>
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
