import styled from "styled-components";



export const BlogHeading = styled.h5`
    font-size: 17px;
    text-transform: capitalize;
    line-height: 1.7;
    margin: 12px 0px;
    
`
export const BlogItemContainer = styled.div`
margin-bottom: 25px;
cursor: pointer;
transition: all 0.2s;


:hover ${BlogHeading} {
    color:  #23d3d3;
}


`



export const BlogSubHeading = styled.span`
    font-weight: 600;
    color: #8C87A6;
    margin-bottom: 20px;
    display: inline-block;
`