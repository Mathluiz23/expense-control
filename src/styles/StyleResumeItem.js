import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 6px 7px 4px black;
  border-radius: 0.8rem;
  padding: 5px 15px;
  width: 30%;
  border: solid 0.5px black;
  margin-top: 20px;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 18px;
      height: 40px;
      width: 100%;
    }

    span {
      display: flex;
      justify-content: center;
      width: 80%;
      text-align: center;
    }

    svg {
      display: none;
    }

  @media (max-width: 600px) {
    width: 18%;
    flex-direction: column;
    padding: 5px 20px;
    margin-top: -5px;
    text-align: center;

    span {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 50px;
      align-items: center;
      font-size: 20px;
    }

    p {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 18px;
      height: 40px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 10px auto;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 25px;
  font-weight: 800;
  font-style: italic;

`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
