import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './Logo'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showMenu: false }
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            this.hideMenu();
        }
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    hideMenu() {
        this.setState({ showMenu: false })
    }

    render() {
        return (
            <header>
                <div className="content-wrapper">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to='/'>
                                <Logo />
                                <span>Supernapie</span>
                            </Link>
                        </div>
                        <div className="mobile-toggle">
                            <a href="javascript:void(0)" onClick={this.showMenu}>
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                        <nav className={ this.state.showMenu ? 'active' : 'closed'}>
                            <ul>
                                <li>
                                    <Link to='/games'>
                                        <i className="fas fa-gamepad"></i>
                                        <span>Games</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/blog'>
                                        <i className="fas fa-pencil-alt"></i>
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact'>
                                        <i className="fas fa-rocket"></i>
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
