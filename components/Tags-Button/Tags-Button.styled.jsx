import styled, { css } from "styled-components";


export const TagsButtonContainer = styled.button`
    background: transparent;
    padding: 13px 15px !important;
    display: inline-block;
    border-radius: 31px;
    margin: 0px 10px;
    font-weight: 600;

    ${(props) => props.isActive && css`
    border: 2px solid #E4E0F7;
    color: #5541D3;
    
    ` }

    & > a {
        text-decoration: none;
        color: inherit;
    }


    @media (max-width: 450px) {

        padding: 10px  !important;

    }

`