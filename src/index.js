import React from 'react';
import {render} from 'react-dom';
import {injectGlobal} from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 20px;
}

.fade {
    opacity: 1;
    transition: opacity 10ms ease-in;
}
.fade-enter {
    opacity: 0;
    z-index: 9999;
}

.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
}

.fade-exit {
    opacity: 0;
    z-index: 9999;

}

`;


const Root = () => {
    return (
        <App/>
    )
};

render(<Root/>, document.querySelector('#root'));
registerServiceWorker();
