import React, { Component } from 'react';
import styled from 'styled-components';
import InputField from './containers/InputField';
import List from './containers/List';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <AppContainer>
          <InputField />
          <List />
          </AppContainer>
        </React.Fragment>
    );
  }
}

export default App;
