import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;

const RadialGradient = styled.div`
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
     at center, #a1edab, #51995e
    );
`;

const PageContent = styled.div`
  display: flex;
  z-index: 100;
  width: 95%;
  height: 92%;
  background-color: white;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0, width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    _onMouseMove(e) {
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {
    const { x, y, width, height } = this.state;
    return (
          <BackgroundContainer onMouseMove={this._onMouseMove.bind(this)}>
            <RadialGradient>
                <PageContent>
                    <h1>Math.round(x / width* 100) { Math.round(x / width* 100) } For y: { Math.round(y / height* 100) }</h1>
                </PageContent>
            </RadialGradient>
          </BackgroundContainer>
    );
  }
}

export default App;
