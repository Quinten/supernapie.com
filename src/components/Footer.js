import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url = '//supernapie.us19.list-manage.com/subscribe/post?u=1984257fe4abd4699e974d0c5&id=42f656250b';

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value
        });

    return (
        <div>
            <h3><span>Supernapie updates in your mailbox?</span></h3>
            <div className='inline-flex-form'>
                <input ref={node => (email = node)} type='email' placeholder='Your email' />
                <button onClick={submit}>Subscribe</button>
            </div>
            {status === "sending" && <div className='sending-message'>sending...</div>}
            {status === "error" && (<div className='error-message' dangerouslySetInnerHTML={{ __html: message }} />)}
            {status === "success" && (<div className='success-message' dangerouslySetInnerHTML={{ __html: message }} />)}
        </div>
  );
};

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <div className="content-wrapper">
                <div className="footer-content">
                    <nav className="footer-sitemap">
                        <ul>
                            <li>
                                <Link to='/'>
                                    <Logo />
                                    <span>Supernapie</span>
                                </Link>
                            </li>
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
                    <div className="mailchimp-form">
                        <MailchimpSubscribe
                            url={url}
                            render={({ subscribe, status, message }) => (
                                <CustomForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                        )} />
                    </div>
                </div>
                <div className="footer-social-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/supernapie/" title="Like Supernapie on Facebook">
                                <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/supernapie" title="Follow Supernapie on Twitter">
                                <span className="social-icon"><i className="fab fa-twitter"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/supernapie" title="View Supernapie on Instagram">
                                <span className="social-icon"><i className="fab fa-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Quinten" title="Checkout my code on Github">
                                <span className="social-icon"><i className="fab fa-github-alt"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <small>&copy; {year} Quinten Clause</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
