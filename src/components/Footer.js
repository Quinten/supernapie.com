import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <div className="content-wrapper">
                <div className="contact">
                    <Link to='/contact'>
                        <i className="fas fa-rocket fa-lg"></i>
                        <span>Contact</span>
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
