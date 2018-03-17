import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => (
    <header>
        <div className="content-wrapper">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <Logo />
                            <span>Supernapie</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/games'>
                            <i className="fas fa-angle-down fa-xs"></i>
                            <span>Games</span>
                            <i className="fas fa-gamepad"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
