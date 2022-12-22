import styled, {css} from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    height: 42px;
    background-color: #CCC;
    color: #000;

    border: 1px solid #81259D;
    border-radius: 21px;


    ${({valid})=> valid === true && css`
    background: #81259D;
    color: #FFF;
    &:hover{
        opacity: 0.6;
        cursor: pointer;
    `}
`