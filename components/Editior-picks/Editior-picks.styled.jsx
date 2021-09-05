import styled from "styled-components";


export const GridLayout = styled.div`
            display: grid;
            grid-template-columns: repeat(4,1fr);
            column-gap: 30px;


    @media (max-width: 1200px) {
        grid-template-columns: repeat(2,1fr);
  }

  @media (max-width: 550px) {
        grid-template-columns: repeat(1,1fr);
  }
`