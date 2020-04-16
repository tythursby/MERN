import styled from "styled-components";

export const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 1rem;
`;

export const StyledCard = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.primary};
  text-align: center;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  ${(props) =>
    props.noPlace &&
    `
      margin: 1rem;
      padding: 1rem;
    `}
  ${(props) =>
    props.user &&
    `
    margin: 1rem;
    background-color: #3c3c3c;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      background: #4e4e4e;
      color: white;
    }
    `}
    ${(props) =>
      props.modal &&
      `
      margin: 1rem;
      display: flex;
      flex-grow: 1;
      align-items: center;
    `}
`;
