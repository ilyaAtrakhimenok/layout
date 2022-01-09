import styled from 'styled-components'

import { LOWER_CLOUDE_SVG, UPPER_CLOUDE_SVG } from '@/constants/store'
import { size } from '@/theme';
import image from "@/asserts/Hero.png"
import imageWeb from "@/asserts/Hero.webp"

const { table, middle} = size;

// had to use ::after due to drop shadow otherwise applyed to each element
const PictureContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    &:after, &:before{
        content: "";
        position: absolute;
        top:0;
        right: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }
    &:after{
        background-image: -webkit-image-set(url(${image}) 1x, url(${imageWeb}) 1x);
        background-size:  740px 885px;
        background-position: right;
        filter: drop-shadow(20px -20px 30px rgba(22, 22, 22, 0.5));
        z-index: -1;
    }
    @media(max-width: ${middle}px){
        &:after{
            background-size: 560px 705px;
            background-position: right center;
        }
    }
    @media(max-width: ${table}px){
        padding-top:144vw;
        &:after{
            background-size: 120vw;
            background-position: center top;
        }
        &:before{
            background-image: ${LOWER_CLOUDE_SVG};
            background-size: 140vw;
            background-position: 80% 5%;
            z-index: -2;
        }
    }

    
`
const CloudContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &:after, &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        z-index: -2;
    }
    &:after{
        content: ${LOWER_CLOUDE_SVG};
        bottom: 20%;
        right: -5%;
        width: 820px;
        height: 500px;
    }
    &:before{
        content: ${UPPER_CLOUDE_SVG};
        top:5%;
        right: 2%;
        width: 500px;
    }
    @media(max-width: ${middle}px){
        overflow: hidden;
        &:after{
            bottom: 10%;
            width: 650px;
        }
        &:before{
      
            width: 450px;
        }
    }        
    @media(max-width: ${table}px){
        &:after{
            display: none;
        }
        &:before{
            display: none
        }
    }       
`

const Container = styled.div`
    max-width: 540px;
    padding-top: 100px;
    @media(max-width: ${middle}px){
        padding-top:0;
    }
    @media(max-width: ${table}px){
        padding:0 10px;
    }
`

export {PictureContainer, CloudContainer, Container} 
