import styled from "styled-components";


export const RecentBlogItemContainer = styled.div`
display: grid;
grid-template-columns: 340px 1fr;
column-gap: 30px;
margin: 40px 0px;
cursor: pointer;


@media (max-width: 768px) {
grid-template-columns:  1fr;

}


`

export const BlogContentContainer = styled.div`
margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const P = styled.p`

margin-top: 24px;
font-size: 20px;
`

export const H3 = styled.h3`
font-size: 35px;
text-transform: capitalize;
margin-top: 25px;

@media (max-width: 768px) {
    font-size: 28px;

}

:hover {
    text-decoration: underline
}


`