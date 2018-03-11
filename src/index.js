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

.masonry-container{
	width: 90%;
	margin: auto;
	margin-top: 10px;
}

.masonry{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: stretch;
	width: 100%;
	margin: auto;
}

.column{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: stretch;
	flex-grow: 1;
}
.tile{
	margin: 4px;
	img{
		box-shadow: 0 1px 1px 2px rgba(0,0,0, .15);
		width: 100%;
	}
}

`;


const Root = () => {
    return (
        <App/>
    )
};

render(<Root/>, document.querySelector('#root'));
registerServiceWorker();
