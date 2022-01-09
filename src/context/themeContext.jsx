import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { size } from '@/theme';

const {table, middle} = size; 

const defineHeaderApperance = () => window.innerWidth > table ? true : false

function ThemeContextProvider(props){
    const [visibility, setVisisbility] = useState(defineHeaderApperance);

    function updateResolution(){
        if(window.innerWidth > middle){
            setVisisbility(true)
        }
        else{
            setVisisbility(false)
        }
    }

    function handleClickMenu(){
        setVisisbility(prev => prev ? false : true)
    }

    useEffect(()=>{
        window.addEventListener('resize', updateResolution);
        return function(){
            window.removeEventListener('resize', updateResolution);
        }
    }, [])
    return <ThemeProvider theme={{visibility, handleClickMenu}} {...props} />
}

export default ThemeContextProvider