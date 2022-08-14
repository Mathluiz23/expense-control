import React from 'react';
import ResumeItem from './ResumeItem';
import * as Style from '../styles/StyleResume';

export default function Resume({ income, expense, total }) {
  return (
    <Style.Container>
      <ResumeItem
        title="Cash Income"
        value={income}
      />
      <ResumeItem
        title="Cash Outflow"
        value={expense}
      />
      <ResumeItem title="Total" value={`${total}`}/>
    </Style.Container>
  );
};
