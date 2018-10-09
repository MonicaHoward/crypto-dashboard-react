import styled from 'styled-components';
import { greenBoxShadow, fontSize1 } from "./Style";

export const ConfirmButton = styled.div`
    margin: 20px;
    color: #271758;
    ${fontSize1}
    font-family: Exo 2, sans-serif;
    color: #887baf;
    padding: 5px;
    &:hover{
        ${greenBoxShadow}
        cursor: pointer;
    }
`