//Importações necessárias
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  justify-content: center;
  align-items: center;

  input {
    width: 50%;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.COLORS.gray900};
    font-size: 16px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 84px;
`;
