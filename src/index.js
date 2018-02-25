import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './components/index.css';
import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const repo = `/${window.location.pathname.split('/')[1]}`;
const Root = () => {
    return (
        <Router basename={repo}>
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


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
