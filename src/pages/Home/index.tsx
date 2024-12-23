import { useState } from "react";


import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import styles from "./Home.module.css";
import { Button } from "../../components/Button";

type StudentType = {
  nome: string;
  hora: string;
}
export function Home() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState<StudentType[]>([] as StudentType[])

  function handleAddStudent() {
    const hora = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    setStudents((arrayAnterior) => [...arrayAnterior, { nome: name, hora }]);
    setName("");
  }
  return (
    <>
      <div className={styles.container}>
        <Header titulo="Frequência dos alunos" />

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="digite o nome do aluno."
          value={name}
        />

        <Button  addStudent={handleAddStudent} />
      </div>

      <div className={styles.containerCard}>
        {
          students.length > 0 ? (
            students.map((student, index) => (
              <Card
                key={index}
                nome={student.nome}
                hora={student.hora}
                variant="default"
              />
            ))
          ) : (
            <strong> Não existe nenhum aluno cadastrado</strong>
          )
        }
      </div>
    </>
  )
}