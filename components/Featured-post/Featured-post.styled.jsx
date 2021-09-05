import styled from 'styled-components';
import Image from 'next/image'


export const FeaturedPostContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
text-align: left;
column-gap: 140px;

@media (max-width:992px ) {
grid-template-columns: repeat(1, 1fr);

}
`

export const Heading = styled.h3`
text-transform: uppercase;
cursor: pointer;
&:hover {
    text-decoration: underline

}
`



export const StyledImage = styled(Image)`
border-radius: 40px;

`
export const StyledImageMain = styled(Image)`
border-radius: 08px;

`

export const P = styled.p`
    font-weight: 600;
    color: #787B8F;
    line-height: 1.7;
    text-transform: capitalize;
`