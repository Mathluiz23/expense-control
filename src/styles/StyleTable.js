import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 4px 5px 5px #0b2e59;
  border-radius: 5px;
  max-width: 1120px;
  margin: -150px auto;
  margin-bottom: 4rem;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset #0b2e59;
  padding-bottom: 5px;
  text-align: center;
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
