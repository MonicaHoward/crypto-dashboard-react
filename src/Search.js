import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from './Style';
import {WhiteText} from './Text';
const SearchContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 200px;
`
const SearchInput = styled.input`
    color: #1163c9;
    border: 1px solid;
    height: 25px;
    margin: 4px;
    place-self: center left;
    ${backgroundColor2}
    ${fontSize2}
`

export default function() {
    return(
        <SearchContainer>
            <WhiteText> Search All Coins </WhiteText>
            <SearchInput onKeyUp={this.filterCoins}/>
        </SearchContainer>
    )
}