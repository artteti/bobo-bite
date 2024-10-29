import { StyledButton } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styletype?: "primary" | "secondary" | "disabled";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  styletype = "primary",
  ...props
}) => {
  return (
    <StyledButton
      styletype={styletype}
      disabled={styletype === "disabled"}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
