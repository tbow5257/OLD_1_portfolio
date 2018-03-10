import React, {Component} from 'react';
import Grid from './Grid';
import styled from 'styled-components';
import {Button, Icon} from 'semantic-ui-react'


const Page = styled.div`
    display: flex;
    
    flex-direction: column;
    
    justify-content: space-between;
    width: 100%;
    margin: 10px;
`;

const Navigation = styled.div`
    align-items: left;
    justify-items: left;
    
    i {
      margin: 4px 8px !important;
      font-size: 1.7em !important;
      }
`;

const Hi = styled.div`
    text-align: center;
    font-size: 2.5em;
`;

const GridButtons = styled.div`
    align-items: center;
    justify-items: center;
`;

const GridContainer = styled.div`
    align-items: center;
    justify-items: center;
    height: 400px;
`;

const Resume = styled.div`
    align-items: center;
    justify-items: center;
`;

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65];
for(let i = 0; i< imgId.length; i++){
    const ih = 200 + Math.floor(Math.random()*10)*15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}


export default class Work extends Component {
    render() {
        return (
            <Page>
                <Navigation>
                    <Button >
                        <Icon name="arrow left" />
                        <Icon name="home" />
                    </Button>
                </Navigation>
                <Hi>
                    Work
                </Hi>
                <GridButtons>

                </GridButtons>
                <GridContainer>
                    <Grid images = {images} brakePoints={brakePoints} />
                </GridContainer>
                <Resume>

                </Resume>


            </Page>
            );
    }
}
