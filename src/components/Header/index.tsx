
import styles from "./Header.module.css";

type Props = {
  titulo: string

}

export function Header({ titulo }: Props) {
  return (
    <header className={styles.container}>
      <h1>{titulo}</h1>

    </header>
  )
}