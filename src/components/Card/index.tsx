import { Container, NameUser, Time } from './styled';

type Props = {
  nome: string;
  hora: string;
  variant: "default" | "secundary";
}
export function Card({ nome, hora, variant }: Props) {


  return (
    <Container variantComponent={variant}>
      <NameUser>{nome}</NameUser>

      <Time>{hora}</Time>
    </Container>
  )
}