import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.info};
  border-radius: 5px;
  padding: 0.75rem;
  font-weight: 600;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  ${(props) =>
    props.disabled &&
    `
    background-color: rgba(0,0,0,.3);
    color: #6a6a6a;
    box-shadow: none;
  `}
  ${(props) =>
    props.danger &&
    `
    color: ${props.theme.danger};
  `}
`;
export const StyledA = styled.a``;
