import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 92%;
  margin: -120px auto;
  display: flex;
  gap: 15px;
  justify-content: space-around;
  

  @media (max-width: 600px) {
    gap: 5px;
    margin-top: -150px;
  }
`;