import React from 'react';
import './StartPresentationBlock.css';
import {useTranslation} from "react-i18next";
import '../../i18n';
import { Button, ButtonText } from "../../Typography";

const StartPresentationBlock = () => {
    const { t } = useTranslation();

    return (
        <div className="start-presentation">
            <div className="start-presentation-info">
                <h1 className="start-presentation-title">
                    {t("start_presentation.title")}
                </h1>
                <p className="start-presentation-description">
                    {t("start_presentation.description")}
                </p>
            </div>
            <div className="start-presentation-btn-container">
                <a href="/">
                    <button className="start-presentation-request-btn" type="button">
                        <ButtonText className="start-presentation-request-btn-text">
                            {t("request_support")}
                        </ButtonText>
                    </button>
                </a>

                <a href="Projects">
                    <button className="start-presentation-support-btn" type="button">
                        <ButtonText className="start-presentation-support-btn-text">
                            {t("support")}
                        </ButtonText>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default StartPresentationBlock;
