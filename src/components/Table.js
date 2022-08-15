import React from "react";
import TableItems from "./TableItens";
import * as Style from "../styles/StyleTable";

export default function Table({ itens, setItens }) {
  // console.log('ITENS', itens);
    
  function onDelete (ID) {
    // console.log('ID', ID);
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Style.Table>
      <Style.Thead>
        <Style.Tr>
          <Style.Th width={40}>Description</Style.Th>
          <Style.Th width={40}>Amount</Style.Th>
          <Style.Th width={10} alignStyleenter>
            Type
          </Style.Th>
          <Style.Th width={10}></Style.Th>
        </Style.Tr>
      </Style.Thead>
      <Style.Tbody>
        {itens.map((item, index) => (
          <TableItems key={index} item={item} onDelete={onDelete} />
        ))}
      </Style.Tbody>
    </Style.Table>
  );
};
