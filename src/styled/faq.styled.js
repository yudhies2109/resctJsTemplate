import styled, { keyframes } from "styled-components";
import { slideInDown, fadeInUp } from 'react-animations';

const slideOutDownAnimation = keyframes`${slideInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const ContainerFaq = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
animation: 1s ${fadeInUpAnimation};
margin: 20px 0px 20px 0px;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .image{
        width: 100%;
        height: 440px;
    }
}
`
export const ContentText = styled.div`
padding-left: 40px;
width: 35%;
height: 539px;
.headFaq {
    font-size: 18px;
    color: #E87643;
    font-weight: bold;
}
.titleFaq {
    font-size: 40px;
}
@media (max-width: 768px) {
    width: 90%;
    padding: 0px 20px 0px 20px;
    h1 {
        font-size: 22px;
        margin-bottom: 20px;
    }
}
`

export const CollapseContent = styled.div`
padding: 10px 20px 10px 20px;
margin-top: 5px; 
border-bottom: 0.1px solid #e8e8e8;
.txt{
    color: grey;
    animation: 1s ${slideOutDownAnimation};
}
@media (max-width: 768px) {
    padding: 10px 0px 10px 0px;
    .icons{
        display: none;
    }
}
`

export const Collapse = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
cursor: pointer;
font-weight: 700;
align-items: center;
font-size: 18px;
`

