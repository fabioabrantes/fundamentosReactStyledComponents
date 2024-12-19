import { UserPlus } from "@phosphor-icons/react";
type Props = {
  addStudent: ()=>void;
}
export function Button({addStudent}:Props) {
  return (
    <button onClick={addStudent}>
      Cadastrar estudante
      <UserPlus color="#fff" weight="fill" size={24} />
    </button>
  )
}