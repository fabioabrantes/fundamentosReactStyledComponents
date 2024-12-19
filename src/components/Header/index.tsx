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



// import styles from "./Header.module.css";

// type Props = {
//   titulo: string

// }

// export function Header({ titulo }: Props) {
//   return (
//     <header className={styles.container}>
//       <h1>{titulo}</h1>

//     </header>
//   )
// }