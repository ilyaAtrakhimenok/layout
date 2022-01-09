import styled, { keyframes } from "styled-components";

import {NOTIFICATION_SVG} from '@/constants/store'

const notificationSize = 22;
const animationDuration = '2s';

const ring = keyframes`
        0% { transform: rotate(0); }
        10% { transform: rotate(50deg); }
        20% { transform: rotate(-50deg); }
        25% { transform: rotate(40deg); }
        30% { transform: rotate(-40deg); }
        35% { transform: rotate(35deg); }
        40% { transform: rotate(-35deg); }
        45% { transform: rotate(30deg); }
        50% { transform: rotate(-30deg); }
        55% { transform: rotate(10deg); }
        60% { transform: rotate(-7deg); }
        63% { transform: rotate(4deg); }
        67% { transform: rotate(-3deg); }
        70% { transform: rotate(0deg); }
`

const NotificationContainer = styled.div`
        display: ${props => props.theme.visibility ? 'block' : 'none'}; 
        justify-self: end;
        width: ${ notificationSize}px;
        height: ${ notificationSize}px;
        background-image:${NOTIFICATION_SVG}; 
        &:hover{
            animation-name: ${ring};
            animation-duration: ${animationDuration};
            cursor: pointer;
        }
`

export {NotificationContainer}