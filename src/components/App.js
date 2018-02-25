import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        this.state = { x: 0, y: 0};
    }

    _onMouseMove(e) {
        const position = ReactDOM.findDOMNode(this).getBoundingClientRect();
        console.log(position, e.nativeEvent.offsetX, e.screenX);

        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

  render() {
    const {x,y} = this.state;
    return (
          <BackgroundContainer onMouseMove={this._onMouseMove.bind(this)}>
            <RadialGradient>
                <PageContent>
                    <h1>Hi {x} {y}</h1>
                </PageContent>
            </RadialGradient>
          </BackgroundContainer>
    );
  }
}

export default App;
