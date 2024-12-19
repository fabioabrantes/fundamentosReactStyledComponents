import { UserPlus } from "@phosphor-icons/react";
import { StyledButton } from "./styled";

type Props = {
  addStudent: () => void;
  variant?: "default" | "secondary";
};

export function Button({ addStudent, variant = "default" }: Props) {
  return (
    <StyledButton onClick={addStudent} variantButton={variant}>
      Cadastrar estudante
      <UserPlus color="#fff" weight="fill" size={24} />
    </StyledButton>
  );
}
