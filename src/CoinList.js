import React from 'react';
import styled, { css } from 'styled-components';
import {subtleBoxShadow, greenBoxShadow, lightBlueBackground, redBoxShadow} from './Style';

const CoinGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-top: 40px;
`

const CoinTile = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
    &:hover {
        cursor: pointer;
        ${greenBoxShadow}
    }
    ${props => props.favorites && css`
        &:hover{
          cursor: pointer;
          ${redBoxShadow}  
        }
    `}
    ${props => props.chosen && !props.favorites && css`
        pointer-events: none;
        opacity: 0.4;
    `}  
`
const FavoriteCoin = CoinTile.extend`
 &:hover{
     cursor: pointer;
     ${redBoxShadow}
 }   
`

const CoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const CoinSymbol = styled.div`
    justify-self: right;
`

const DeleteIcon = styled.div`
    justify-self: right;
    ${CoinTile}:hover & {
        display: block;
        color: red;
    }
`

export default function(favorites=false) {
    let coinKeys = favorites ? this.state.favorites : Object.keys(this.state.coinList).slice(0, 100);
    return(
        <CoinGrid>
            {coinKeys.map(coinKey =>
            <CoinTile chosen={this.isInFavorites(coinKey)} favorites={favorites} onClick={
                favorites ? () => {this.removeCoinFromFavorites(coinKey)} : () => {this.addCoinToFavorites(coinKey)}}>
                <CoinHeaderGrid>
                    <div>{this.state.coinList[coinKey].CoinName}</div>
                    {favorites ? <DeleteIcon> X </DeleteIcon> : <CoinSymbol>{this.state.coinList[coinKey].Symbol}</CoinSymbol>}
                </CoinHeaderGrid>
                    {<img style={{height: '50px'}} src={`http://cryptocompare.com/${this.state.coinList[coinKey].ImageUrl}`} />}
              
                
            </CoinTile>)}
        </CoinGrid>  
    )
}