import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className='mailchimp-form'>
            <h3>Supernapie updates in your mailbox?</h3>
            <div>
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
                <div className="copyright">
                    <small>&copy; {year} Quinten Clause</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
