import React from "react";
import * as Style from "../styles/StyleTable";

export default function Table({ itens, setItens }) {
    
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
      </Style.Tbody>
    </Style.Table>
  );
};
