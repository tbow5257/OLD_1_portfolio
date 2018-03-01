import React, {Component} from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'
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
  text-align: center;
  p:nth-of-type(2) {
    font-size: 0.7em;
  }
`;

const Contact = styled.div`
  font-size: 1.5em;
  img {
    height: 40px;
    padding-top: 5px;
    margin: 0 25px 0 25px;
  }
`;

const StyledButton = styled(Button).attrs({
})`
    && {
    background: #61a46a;
    color: #FFF;
    //border: 1px solid #233a25;
    font-size: 2rem;
    font-weight: bold;
    margin: 15px;
  }
`;




class Home extends Component {
    render() {
        return (
            <Page>
                <Logo> <img src={icon} alt='Dankbytes Icon'></img>Dankbytes</Logo>
                <HelloText>
                    <p>Thomas Bowen's portfolio page</p>
                    <p>A web developer on the west coast</p>
                    <Link to="/work"><StyledButton><Icon name="briefcase"/>Work</StyledButton></Link>
                    <StyledButton><Icon name="hand peace"/>About</StyledButton>
                </HelloText>
                <Contact>   <img src={email} alt='Email' data-tip="hello at tjbowen.me"></img>
                    <ReactTooltip delayHide={1000}  />
                    <img src={github} alt='Github'></img>
                            <img src={twitter} alt='Twitter'></img></Contact>
            </Page>
        );
    }
}

export default Home;