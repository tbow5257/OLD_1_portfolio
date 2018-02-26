import React, {Component} from 'react';
import Home from './Home';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;

const RadialGradient = styled.div.attrs({

})`
  display: flex;
  height:80%;
  width:80%;
  justify-content: center;
  align-items: center;
  /*Fallback if gradeints don't work */
  background: #9b59b6;
  /*Linear gradient... */
  background: 
    radial-gradient(
     at ${props => props.calcX}% ${props => props.calcY}%, #a1edab, #182B1B
    );
`;

const PageContent = styled.div`
  display: flex;
  z-index: 100;
  width: 92%;
  height: 88%;
  background-color: white;
  padding: 5px;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0, width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    _onMouseMove(e) {
        this.setState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
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
            <BackgroundContainer onMouseMove={this._onMouseMove.bind(this)}>
                <RadialGradient calcX={Math.round(x / width * 77)} calcY={Math.round(y / height * 77)}>
                    <PageContent>
                        <Home/>
                    </PageContent>
                </RadialGradient>
            </BackgroundContainer>
        );
    }
}

export default App;
