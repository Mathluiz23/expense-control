import React from "react";
import * as Style from "../styles/StyleTableItens";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

export default function TableItens({ item, onDelete }) {
  return (
    <Style.Tr>
      <Style.Td>{item.description}</Style.Td>
      <Style.Td alignCenter>{item.amount}</Style.Td>
      <Style.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Style.Td>
      <Style.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Style.Td>
    </Style.Tr>
  );
};
