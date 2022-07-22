import React from 'react';
import './FundraisingProgress.css';
import { useTranslation } from "react-i18next";
import '../../i18n';
import { LineProgressBar } from '@frogress/line';

const FundraisingProgress = ({targetSum, remainingSum}) => {
    const { t } = useTranslation();

    return (
        <div className="progress-wrap">
            <div className="progress-info">
                <div className="progress-target">
                    <p className="progress-target-label">
                        {t("sum_required")}
                    </p>
                    <p className="progress-target-sum">₴35,000</p>
                </div>

                <div className="progress-remains">
                    <p className="progress-target-label">
                        {t("sum_remains")}
                    </p>
                    <p className="progress-remaining-sum">₴5,000</p>
                </div>
            </div>

            <LineProgressBar
                percent={75}
                height={6}
                width={357}
                progressColor='#4C94FF'
                containerColor='#C2E9FF'
                className="line-progress-bar"
            />
        </div>

    )
}

export default FundraisingProgress;
