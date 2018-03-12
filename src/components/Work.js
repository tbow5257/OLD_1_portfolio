import React, {Component} from 'react';
import Masonry from './Grid';
import styled from 'styled-components';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Page = styled.div`
    display: flex;
    
    flex-direction: column;
    
    justify-content: space-between;
    width: 100%;
    margin: 10px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.div`
    align-items: left;
    justify-items: left;
    
    i {
      margin: 4px 8px !important;
      font-size: 1.7em !important;
      padding-top: 3px;
      }
`;

const Hi = styled.div`
    text-align: center;
    font-size: 2.5em;
    margin: 15px;
`;

const GridButtons = styled.div`
    align-items: center;
    justify-items: center;
`;

const GridContainer = styled.div`
    width: 90%;
    margin: 15px auto;
`;

const Resume = styled.div`
    align-items: center;
    justify-items: center;
    margin: auto 35px;
    
        .user {
       position: relative;
       left: -.5em;
       width: .2em;
       vertical-align: -.25em;
       text-shadow: -1px -1px 0px white, -1px 1px 0px white, -1px 0px 0px white; // optional contrast
     }
`;



export default class Work extends Component {
    render() {
        return (
            <Page>
                <TopRow>
                    <Navigation>
                        <Link to="/">
                            <Button >
                                <Icon name="arrow left" />
                                <Icon name="home" />
                            </Button>
                        </Link>
                    </Navigation>
                    <Hi>
                        Work
                    </Hi>
                    <Resume>
                        <a href="https://1drv.ms/b/s!AkvPtK0fVfhSgbMe376WTJoKWqccyA" target="_blank" rel="noopener noreferrer">
                                Resume
                            <span>
                            <Icon name="file text" />
                            <Icon name="user" />
                            </span>
                        </a>
                    </Resume>
                </TopRow>
                <GridButtons>
                </GridButtons>
                <GridContainer>
                    <Masonry />
                </GridContainer>

            </Page>
            );
    }
}
