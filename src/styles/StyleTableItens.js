import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 20px;
  align-items: center;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  padding: 5px;
  border-radius: 4px;
  background-color: rgb(235, 230, 230);

  svg {
    width: 20px;
    height: 20px;
  }
`;
