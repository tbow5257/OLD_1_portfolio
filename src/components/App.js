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
  render() {
    return (
      <BackgroundContainer>
        <RadialGradient>
            <PageContent>
                <h1>Hi</h1>
            </PageContent>
        </RadialGradient>
      </BackgroundContainer>
    );
  }
}

export default App;
