import { styled } from "styled-components";

const AppContainer = styled.div`
   display: flex;
  /* justify-content: center; */
  /* align-items: flex-start; */
  gap: 20px;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default AppContainer;