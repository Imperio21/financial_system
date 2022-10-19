import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ee82ee;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
