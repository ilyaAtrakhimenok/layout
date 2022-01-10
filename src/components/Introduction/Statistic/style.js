import styled from "styled-components";

import { size } from '@/theme';

const { table} = size;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: ${table}px){
       display:none;
    }
    padding-bottom: 100px;
`



export { Container}