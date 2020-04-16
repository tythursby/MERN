import styled from "styled-components";

export const StyledDiv = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const StyledUl = styled.ul`
  padding: 0;
  display: inline-table;
  width: auto;
  flex-direction: column;
  width: 60%;
`;
export const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 1rem;
`;
export const PlaceTitle = styled.h2`
  color: ${(props) => props.theme.info};
`;
export const ImgContainer = styled.div`
  border-radius: 5px;
  max-width: 100%;
`;
export const PlaceImg = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const TextContainer = styled.div`
  padding: 1rem;
`;
export const ActionContainer = styled.div`
  display: flex;
  padding: 2rem;
  border-top: 1px solid #aaaaaa;
  justify-content: space-between;
`;
