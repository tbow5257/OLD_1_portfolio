import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 20px;
    }
`;

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
};

render(<Root/>, document.querySelector('#root'));
registerServiceWorker();
