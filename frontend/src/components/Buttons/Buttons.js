import React from "react";
import "./Buttons.css";
import { ButtonText } from "../../Typography";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonRequestSupport = ({ setModalActive }) => {
  const { t } = useTranslation();
  return (
    <button
      className="button-request-support"
      onClick={() => setModalActive(true)}
    >
      <ButtonText>{t("btn_request_support")}</ButtonText>
    </button>
  );
};

const ButtonTakePart = () => {
  const { t } = useTranslation();
  return (
    <a href="/projects">
      <button className="button-take-part">
        <ButtonText className="button-take-part-text">
          {t("btn_take_part")}
        </ButtonText>
      </button>
    </a>
  );
};

const ButtonSubmit = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="button-submit">
      <ButtonText className="button-submit-text">{t("btn_modal")}</ButtonText>
    </button>
  );
};

const ButtonToSupport = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="button-to-support">
      <ButtonText className="button-to-support-text">
        {t("btn_to_support")}
      </ButtonText>
    </button>
  );
};


const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export { ButtonRequestSupport, ButtonTakePart, ButtonSubmit, ButtonToSupport, LoginButton, LogoutButton };
