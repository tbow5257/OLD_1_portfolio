import React, {Component} from 'react';
import styled from 'styled-components';
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import icon from '../assets/noun.png'
import email from '../assets/email.png'

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
  display: flex;
  align-items: center;
  img {
    height: 50px;
    margin-right: 10px;
  }
`;

const HelloText = styled.div`
  font-size: 2.5em;
`;

const Contact = styled.div`
  font-size: 1.5em;
  img {
    height: 40px;
    padding-top: 5px;
    margin: 0 15px 0 15px;
  }
`;


class Home extends Component {
    render() {
        return (
            <Page>
                <Logo> <img src={icon} alt='Dankbytes Icon'></img>Dankbytes</Logo>
                <HelloText>Thomas Bowen's portfolio page</HelloText>
                <Contact>   <img src={email} alt='Email'></img>
                            <img src={github} alt='Github'></img>
                            <img src={twitter} alt='Twitter'></img></Contact>
            </Page>
        );
    }
}

export default Home;