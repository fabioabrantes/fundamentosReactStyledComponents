import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 84px 0 24px;
`;
export const Title = styled.h1`
  font-size: 2rem; 
  font-weight: bold; 
  color: ${props=>props.theme.COLORS.black}; 
  text-align: center; 
`;

