import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, valid }: IButtonProps) => {
  return <ButtonContainer valid={valid} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
