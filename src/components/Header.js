import React from 'react';
import * as Style from '../styles/StyleHeader';
import {FcMoneyTransfer} from 'react-icons/fc';

export default function Header()  {
  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>
          Expense Control
          <FcMoneyTransfer  style={{ margin: '-5px 8px'}}/>
        </Style.Title>
      </Style.Header>
    </Style.Container>
  );
};
