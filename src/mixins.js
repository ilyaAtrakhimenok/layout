import styled, {css} from 'styled-components'

function font(family, weight, fontSize, lineHeight){
    return css`
        font-family: '${family}' , sans-serif;
        font-weight: ${weight};
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
    `
}

export {font}