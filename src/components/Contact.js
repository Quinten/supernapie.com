import React from 'react'

const Contact = () => (
    <div>
    <h1 className="ta-center"><i className="fas fa-rocket"></i> <span>Make contact</span></h1>
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
)

export default Contact
