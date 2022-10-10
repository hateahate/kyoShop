import React from "react";
import styled from "styled-components";

const Component = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "144px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  border: 1px solid #40bf6a;
  padding: 12px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  color: #40bf6a;
  font-family: "Proxima Nova";
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
  &:hover {
    border: 1px solid #61d186;
    background: #61d186;
    color: white;
  }
  &:active {
    background: #2e9e53;
    color: white;
  }
`;

const LinedButton = (props) => {
  return (
    <Component
      width={props.width}
      height={props.height}
      className={props.className}
    >
      {props.title}
    </Component>
  );
};

export default LinedButton;
