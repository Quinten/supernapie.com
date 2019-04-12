import styles from './css/main.less';

// font awesome

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

library.add(faFacebookF);
library.add(faTwitter);
library.add(faInstagram);
library.add(faGithubAlt);
library.add(faPencilAlt);
library.add(faRocket);
library.add(faGamepad);
library.add(faMobileAlt);
library.add(faDesktop);
library.add(faBars);

dom.watch();

// react core
import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
    render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}
