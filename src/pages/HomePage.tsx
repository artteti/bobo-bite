import Button from "../components/Button";
import { LoginForm } from "../components/LogInForm";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcomeMessage")}</h1>
      <LoginForm />
      <Button>Click Me</Button>
    </>
  );
};
