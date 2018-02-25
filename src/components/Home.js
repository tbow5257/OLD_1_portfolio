import React, {Component} from 'react';
import styled from 'styled-components';
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const HelloText = styled.div`
  font-size: 2.5em;
`;

const Contact = styled.div`
  font-size: 1.5em;
  img {
    height: 40px;
  }
`;

const Thumbs = styled.img`
  height: 40px;
`;

class Home extends Component {
    render() {
        return (
            <Page>
                <Logo>Dankbytes</Logo>
                <HelloText>Thomas Bowen's portfolio page</HelloText>
                <Contact>hello@tjbowen.me <img src={github} alt='Github'></img> <img src={twitter} alt='Twitter'></img></Contact>
            </Page>
        );
    }
}

export default Home;