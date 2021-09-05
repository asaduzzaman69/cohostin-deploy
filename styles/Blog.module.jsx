import styled from 'styled-components';
import Image from 'next/image';

// Layout for the Blog
export const GridLayout = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 50px;
margin-top: 40px;


 & ~ ul {
     justify-content: center;
 }
 & ~ ul > li{
     font-size: 17px;
     margin: 10px;
 }
// Responsive css
 @media (max-width: 780px) {
grid-template-columns: repeat(2, 1fr);

}

@media (max-width: 550px) {
grid-template-columns: repeat(1, 1fr);

}

`

export const FeatureCardImage = styled(Image)`
position: relative;
top: -20px;

`



export const BlogContainer = styled.div`
padding-bottom: 100px;

@media (max-width: 550px) {
    padding-top: 0px !important;
}

`


export const BlogAllContainer = styled.div`

padding-top: 120px;
@media (max-width: 992px ) {
    padding-top: 25px ;
}
`