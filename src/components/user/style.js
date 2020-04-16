import styled from "styled-components";

export const ImgContainer = styled.div`
  margin: 1rem;
`;
export const Img = styled.img`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 100%;
  width: 100px;
`;
export const TextContainer = styled.div`
  padding: 1rem;
  align-items: flex-start;
`;
export const StyledDiv = styled.div`
  text-align: center;
  ${(props) =>
    props.card &&
    `
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #3c3c3c;
    align-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `}
`;
export const StyledUl = styled.ul`
  padding: 0;
  display: inline-table;
  width: auto;
`;
export const UserName = styled.h2`
  color: ${(props) => props.color};
`;
export const UserInfo = styled.h3`
  color: ${(props) => props.color};
`;
