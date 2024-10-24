import Button from "../components/Button";
import { LoginForm } from "../components/LogInForm";

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to BoboBite</h1>
      <LoginForm />
      <Button>Click Me</Button>
    </>
  );
};
