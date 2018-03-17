import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <div className="content-wrapper">
                <div className="contact">
                    <p>Wanna get in touch?</p>
                    <Link to='/contact' className="btn">
                        <i className="fas fa-rocket fa-lg"></i>
                        <span> Make contact</span>
                    </Link>
                </div>
                <div className="copyright">
                    <small>&copy; {year} Quinten Clause</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
