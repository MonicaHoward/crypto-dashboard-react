import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButton = styled.div`
`

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 250px auto 200px 200px;
  padding: 40px;
`

class App extends Component {
  render() {
    return (
      <Bar>
        <Logo>
          Crypto Dashboard
        </Logo>
        <div>
        </div>
        <ControlButton>
          Dashboard
        </ControlButton>
        <ControlButton>
          Settings
        </ControlButton>
      </Bar>
    );
  }
}

export default App;
