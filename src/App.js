import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import _ from 'lodash';
import './App.css';
import AppBar from './AppBar';
import CoinList from './CoinList';
import Search from './Search';
import {ConfirmButton} from './Button';

const cc = require('cryptocompare');

const AppLayout = styled.div`
  padding: 40px;
`

const Content = styled.div`
`
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

const MAX_FAVORITES = 10;

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
    page: 'settings',
    favorites: ['ETH', 'BTC', 'XMR', 'DOGE', 'EOS' ],
    ...checkFirstVisit()
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});

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
      });
      localStorage.setItem('cryptoDData', JSON.stringify({
        favorites: this.state.favorites
      }));
  }
  settingsContent = () => {
    return(
      <div>
        {this.firstVisitMessage()}
        <div>
        <CenterDiv>
          <ConfirmButton onClick={this.confirmFavorites}>
            Confirm Favorites
          </ConfirmButton>
        </CenterDiv>
        {CoinList.call(this, true)}
        {Search.call(this)}
        {CoinList.call(this)}  
        </div>
      </div>
    )
  }

  loadingContent = () => {
    if(!this.state.coinList) {
      return (
        <div>Loading Coins</div>
      )
    }
  }

  addCoinToFavorites = (key) => {
    let favorites =  [...this.state.favorites];
    if(favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites})
    }
  }

  removeCoinFromFavorites = (key) => {
    let favorites =  [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)});

  }

  isInFavorites = (key) => _.includes(this.state.favorites, key)

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
