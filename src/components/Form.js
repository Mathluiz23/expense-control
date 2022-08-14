import React, {  } from "react";
import * as Style from "../styles/StyleForm"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

export default function Form() {


  return (
    <>
      <Style.Container>
        <Style.InputContent>
          <Style.Label></Style.Label>
          <Style.Input 
            placeholder="Description"
          />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label></Style.Label>
          <Style.Input
            placeholder="Amount"
            type="number"
            min="0"
          />
        </Style.InputContent>
        <Style.RadioGroup>
          <Style.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
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
        <Style.Button>Add Transaction</Style.Button>
      </Style.Container>
    </>
  );
};
