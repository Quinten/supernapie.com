import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/fontawesome-free-brands'

const Contact = () => (
    <div>
        <ul>
            <li>
                <a href="https://twitter.com/supernapie">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span>Supernapie on twitter</span>
                </a>
            </li>
        </ul>
    </div>
)

export default Contact
