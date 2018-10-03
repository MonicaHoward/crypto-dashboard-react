import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import './App.css';
import AppBar from './AppBar';

const AppLayout = styled.div`
  padding: 40px;
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

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = () => {
    console.log('Fetching coins...');
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

  loadingContent = () => {
    if(!this.state.coinList) {
      return (
        <div>
          Loading Coins
        </div>
      )
    }
  }
  render() {
    return (
      <AppLayout>
        {AppBar.call(this)}
    
        {this.loadingContent() || <Content>
          { this.showingSettings() && this.settingsContent() }
         
        </Content>}
      </AppLayout>
    );
  }
}

export default App;
