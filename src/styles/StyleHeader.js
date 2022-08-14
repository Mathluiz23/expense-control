import styled from "styled-components";
import background from "../images/background.png"

export const Container = styled.div`
  position: relative;
  height: 200px;
  text-align: center;
  background:url(${background});
  background-size: cover;
  box-shadow: 4px 3px 2px black;
  z-index: -1;

  @media (max-width: 600px) {
    height: 230px;
  }
`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  font-size: 40px;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
