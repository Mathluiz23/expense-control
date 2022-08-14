import React, { useState } from "react";
import * as Style from "../styles/StyleForm"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

export default function Form() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState(false);

  function addNewTransaction() {
    if (!description || !amount) {
      return 'error';
    } else if (amount < 1) {
      return 'error';
      }
  }
  
  return (
    <>
      <Style.Container>
        <Style.InputContent>
          <Style.Label></Style.Label>
          <Style.Input 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label></Style.Label>
          <Style.Input
            placeholder="Amount"
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Style.InputContent>
        <Style.RadioGroup>
          <Style.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!expense)}
          />

          <Style.Label htmlFor="rIncome">
              Entry
            <FaRegArrowAltCircleUp />
          </Style.Label>

          <Style.Input
            type="radio"
            id="rExpenses"
            name="group1"
          />

          <Style.Label htmlFor="rExpenses">
              Exit
            <FaRegArrowAltCircleDown/>
          </Style.Label>

        </Style.RadioGroup>
        <Style.Button onClick={addNewTransaction}>Add Transaction</Style.Button>
      </Style.Container>
    </>
  );
};
