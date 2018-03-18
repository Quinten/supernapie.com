import React from 'react'

const Contact = () => (
    <div className="social-links">
        <ul>
            <li>
                <a href="https://twitter.com/supernapie">
                    <span class="social-icon"><i className="fab fa-twitter"></i></span>
                    <span>Follow Supernapie on Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/supernapie">
                    <span class="social-icon"><i className="fab fa-instagram"></i></span>
                    <span>Check Supernapie on Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://supernapie.slack.com">
                    <span class="social-icon"><i className="fab fa-slack-hash"></i></span>
                    <span>Join the Supernapie Slack space</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/Quinten">
                    <span class="social-icon"><i className="fab fa-github"></i></span>
                    <span>Checkout Quinten's code on Github</span>
                </a>
            </li>
        </ul>
    </div>
)

export default Contact
