import { Container, Title } from "../Header/styled";

type Props = {
  titulo: string;
};

export function Header({ titulo }: Props) {
  return (
    <Container>
      <Title>{titulo}</Title>
    </Container>
  );
}