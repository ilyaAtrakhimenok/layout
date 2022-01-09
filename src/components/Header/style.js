import styled from 'styled-components'

import { size } from '@/theme';

const {middle} = size; 

const HeaderContainer = styled.header`
    position: relative;
    display: grid;
    grid-template-columns: 15% 60% 20% 5%;
    justify-items: center;
    align-items: center;    
    @media(max-width: ${middle}px){
        display: flex;
        flex-direction: column;
        gap:50px;
        margin: 0 10px 50px 10px;
    }
`

export {HeaderContainer}