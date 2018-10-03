import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButton = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #F4E409`}
`
const Bar = styled.div`
  display: grid;
  grid-template-columns: 250px auto 200px 200px;
  margin-bottom: 40px;
`

export default function() {
    return(
        <Bar>
          <Logo>
            Crypto Dashboard
          </Logo>
          <div>
          </div>
          {!this.state.firstVisit &&(
            <ControlButton onClick={()=>{this.setState({page: 'dashboard'})}} active = {this.showingDashboard()} >
              Dashboard
            </ControlButton>
          )}
          <ControlButton onClick={()=>{this.setState({page: 'settings'})}} active = {this.showingSettings()}>
            Settings
          </ControlButton>
        </Bar>
    )
}