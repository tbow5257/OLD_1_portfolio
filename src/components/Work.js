import React, {Component} from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`;

const Hi = styled.div`
align-items: center;
justify-items: center;
`;


export default class Work extends Component {
    render() {
        return (
            <Page>
                <Hi>
                    <p>Hi</p>
                    <p>Hi</p>
                    <p>Hi</p>
                    <p>Hi</p>
                    <p>Hi</p>
                </Hi>
            </Page>
            );
    }
}
