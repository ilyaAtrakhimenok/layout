import styled, { keyframes } from "styled-components";

const size = 22;
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

const Notification = styled.div`
        justify-self: end;
        width: ${size}px;
        height: ${size}px;
        background-image: url("data:image/svg+xml,%3Csvg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6666 16.5H18.8703C19.5862 16.5 20.1666 15.9196 20.1666 15.2036C20.1666 14.8598 20.0301 14.5301 19.7869 14.287L18.8703 13.3703C18.5265 13.0265 18.3333 12.5602 18.3333 12.074L18.3333 9.13979C18.3333 5.10455 15.0621 1.83334 11.0269 1.83334C6.98304 1.83334 3.70829 5.11793 3.72043 9.16173L3.72911 12.052C3.73061 12.5512 3.52849 13.0294 3.16944 13.3762L2.22623 14.2872C1.97513 14.5297 1.83331 14.8638 1.83331 15.2129C1.83331 15.9238 2.40956 16.5 3.12039 16.5H7.33331C7.33331 18.5251 8.97494 20.1667 11 20.1667C13.025 20.1667 14.6666 18.5251 14.6666 16.5ZM17.898 14.3426L18.6804 15.125H3.33799L4.12468 14.3652C4.75302 13.7583 5.10672 12.9214 5.1041 12.0479L5.09543 9.1576C5.08557 5.87481 7.74405 3.20834 11.0269 3.20834C14.3027 3.20834 16.9583 5.86394 16.9583 9.13979L16.9583 12.074C16.9583 12.9249 17.2963 13.7409 17.898 14.3426ZM13.2916 16.5H8.70831C8.70831 17.7657 9.73433 18.7917 11 18.7917C12.2656 18.7917 13.2916 17.7657 13.2916 16.5Z' fill='%23225FE9'/%3E%3C/svg%3E");
        &:hover{
            animation-name: ${ring};
            animation-duration: ${animationDuration};
            cursor: pointer;
        }
`

export {Notification}