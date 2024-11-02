import { Button } from "../components/Button/Button";
import { LoginForm } from "../components/LogInForm";
import { useTranslation } from "react-i18next";

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => console.log("Hello!");
  return (
    <>
      <h1>{t("welcomeMessage")}</h1>
      <LoginForm />
      <Button
        label="Primary Button"
        onClick={handleClick}
        styletype="primary"
      />
      <Button
        label="Secondary Button"
        onClick={handleClick}
        styletype="secondary"
      />
      <Button
        label="Disabled Button"
        onClick={handleClick}
        styletype="disabled"
      />
    </>
  );
};
