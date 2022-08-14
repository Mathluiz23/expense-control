import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 175px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px black;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 0;
  }

  input[type="radio"]:checked + label {
    margin: 5px;
    padding: 5px 10px;
    background: #0b2e59;
    border-radius: 2px;
    color: #fff;
  }

  input[type="radio"]:checked {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  min-width: 120px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  /* background-color: #0083FF; */
  background-color:  #0b2e59;
`;
