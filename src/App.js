import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import './App.css';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButton = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #F4E409`}
`
const AppLayout = styled.div`
  padding: 40px;
`

const Bar = styled.div`
  display: grid;
  grid-template-columns: 250px auto 200px 200px;
  margin-bottom: 40px;
`

const Content = styled.div`
`

const checkFirstVisit = () => {
  let cryptoDashboardData = localStorage.getItem('cryptoDData');
  if(!cryptoDashboardData) {
    return {
      firstVisit: true,
      page: 'settings'
    }
  }
  return {};
}

class App extends Component {
  state = {
    page: 'dashboard',
    ...checkFirstVisit()
  }
  showingDashboard = () =>  this.state.page  === 'dashboard';
  showingSettings = () =>  this.state.page  === 'settings';
  firstVisitMessage = () => {
    if(this.state.firstVisit){
      return<div>Welcome to your Crypto Dashboard. Please select your favorite coins to begin.</div>
    }
  }
  confirmFavorites = () => {
    localStorage.setItem('cryptoDData', 'test');
      this.setState({
        firstVisit: false,
        page: 'dashboard'
      })
  }
  settingsContent = () => {
    return(
      <div>
        {this.firstVisitMessage()}
        <div onClick={this.confirmFavorites}>
        Confirm Favorites
        </div>
      </div>
    )
  }
  render() {
    return (
      <AppLayout>
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
        <Content>
          { this.showingSettings() && this.settingsContent() }
         
        </Content>
      </AppLayout>
    );
  }
}

export default App;
