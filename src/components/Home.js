import React, {Component} from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";
import {Button, Icon} from 'semantic-ui-react'
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
  height: 100%;
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
  p {
    margin: 5px auto;
  }
  p:nth-of-type(2) {
    font-size: 0.7em;
    margin-bottom: 35px;
  }
`;

const Skills = styled.div`
  width: 70%;
  text-align: center;
  p {
    margin: 17px auto;
  }
`;

const Nav = styled.div`

`;

const Contact = styled.div`
  font-size: 1.5em;
  margin: 20px;

  img {
    height: 40px;
    padding-top: 5px;
    margin: 0 25px 0 25px;
    transition: all 200ms ease-in;
    transform: scale(1);       
    background: transparent !important;
    &:hover {
      transform: scale(1.5);
      transition: all 200ms ease-in;
      filter: drop-shadow(44px 44px 150px #222);
        -webkit-filter: drop-shadow(5px 5px 5px #222 );
    }
`;

const StyledButton = styled(Button)`
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
                    <p>Thomas Bowen's portfolio site</p>
                    <p>West coast developer, designer</p>
                </HelloText>
                <Skills>
                    <p>Hi. I like making unique web experiences with JavaScript, Python and PHP.</p>
                    <p>For front-end, I prefer using React or Jekyll and am learning Angular.</p>
                    <p>Flask for backend along with Node.js and Wordpress API.</p>
                    <p>If you like my work, drop me a line.</p>
                </Skills>
                <Nav>
                    <Link to="/work"><StyledButton><Icon name="briefcase"/>Work</StyledButton></Link>
                    {/*<StyledButton><Icon name="hand peace"/>About</StyledButton>*/}
                </Nav>
                <Contact>
                    <a href="mailto:hello@tjbowen.me" rel="noopener noreferrer"><img src={email} alt='Email' data-tip="hello at tjbowen.me"></img></a>
                    <ReactTooltip delayHide={1000}/>
                    <a href="https://www.github.com/tbow5257" target="_blank" rel="noopener noreferrer"><img src={github} alt='Github'></img></a>
                    <a href="https://twitter.com/tbow5257" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='Twitter'></img></a>
                </Contact>
            </Page>
        );
    }
}

export default Home;