import React, {Component} from 'react';
import Home from './Home';
import Work from './Work';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const BackgroundContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;

const RadialGradient = styled.div.attrs({
    style: props => ({background: `radial-gradient(at ${props.calcX}% ${props.calcY}%, #a1edab, #182B1B)`})
})`
  display: flex;
  height:80%;
  width:75%;
  justify-content: center;
  align-items: center;
`;

const PageContent = styled.div`
  display: flex;
  z-index: 100;
  width: 92%;
  height: 92%;
  background-color: white;
  padding: 5px;
`;



class App extends Component {
    constructor(props) {
        super();
        this.state = {x: 0, y: 0, width: 0, height: 0, calcX: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    _onMouseMove(e) {
        this.setState({x: e.screenX, y: e.screenY});
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }


    render() {
        const {x, y, width, height} = this.state;


        return (
            <Router>
                <Route render={({location}) => (
                    <div>
                        <Route exact path="/"
                               />
                            <BackgroundContainer onMouseMove={this._onMouseMove.bind(this)}>
                                <RadialGradient calcX={Math.round(x / width * 77)} calcY={Math.round(y / height * 77)}>
                                    <PageContent >
                                        <TransitionGroup style={{ width: '100%', position: 'relative', }}>
                                            <CSSTransition key={location.key} classNames="fade" timeout={233}>
                                                <Switch location={location}>
                                                    <Route exact path="/" component={Home}/>
                                                    <Route exact path="/work" component={Work}/>
                                                    <Route render={() => <div>Not Found</div>} />
                                                </Switch>
                                            </CSSTransition>
                                        </TransitionGroup>
                                    </PageContent>
                                </RadialGradient>
                            </BackgroundContainer>
                    </div>
                    )}
                />
            </Router>

        );
    }
}

export default App;
