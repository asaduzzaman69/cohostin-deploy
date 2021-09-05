import styled from "styled-components";
import Image from 'next/image';

export const StyledImage = styled(Image)`
border-radius: 10px;

`

export const Heading = styled.h6`
font-weight: bold;
font-size: 18px;
line-height: 1.7;
color: #0A0E61;
cursor: pointer;
text-transform: capitalize;

:hover {
    text-decoration: underline;
}
`


export const  P = styled.p`
font-size: 15px;
margin-bottom: 15px;
color: #9499AF;
`

export const A = styled.a`
color: #0A0E61;
text-decoration: underline;
font-weight: bold;

`


export const Tag = styled.div`
position: absolute;
z-index: 1;
padding: 6px 10px;
color: black;
right: 22px;
font-weight: 500;
top: 10px;
background: white;
font-size: 14px;
border-radius: 4px;
cursor: pointer;
`