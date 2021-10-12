import styled from "styled-components";

export const Grid = styled.div`
  min-height: 100%;
  padding: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Column = styled.div`
  flex: ${(props) => props.size};
`;
