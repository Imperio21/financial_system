import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import * as C from "./styles";

export const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>

        {Icon === FaRegArrowAltCircleDown ? (
          <Icon color="red" />
        ) : (
          <Icon color="green" />
        )}
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};
