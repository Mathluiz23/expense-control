import React from "react";
import * as Style from "../styles/StyleResumeItem";

export default function ResumeItem({ title, value }) {
  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderTitle>{title}</Style.HeaderTitle>
      </Style.Header>
      <Style.Total>{value}</Style.Total>
    </Style.Container>
  );
};
