import styled from 'styled-components';

type Props = {
  variantButton: string;
};

export const StyledButton = styled.button<Props>`
  width: 25%;
  padding: 10px;
  font-weight: bold;
  background-color: ${(props) =>
    props.variantButton === "secondary"
      ? props.theme.COLORS.blue
      : props.theme.COLORS.pink};
  color: ${(props) => props.theme.COLORS.white};
  border-radius: 5px;
  border: ${(props) =>
    props.variantButton === "secondary" ? `2px solid ${props.theme.COLORS.green500}` : "none"};
  cursor: pointer;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
