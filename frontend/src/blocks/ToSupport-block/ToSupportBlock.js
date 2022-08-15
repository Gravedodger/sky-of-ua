import React from "react";
import "./ToSupportBlock.css";
import { ButtonToSupport } from "../../components/Buttons";

const ToSupportBlock = () => {
  return (
    <div className="to-support-block-wrap">
      <h4 className="to-support-block-title">Підтримати</h4>
      <p className="to-support-block-text">Оберіть спосіб переказу коштів</p>
      <form>
        <div className="to-support-block-option-wrap">
          <input id="payByCard" type="radio" name="typeOfPayment" />
          <label htmlFor="payByCard" className="to-support-block-label">
            Платіж картою
          </label>
        </div>

        <div className="to-support-block-option-wrap">
          <input id="payBySwift" type="radio" name="typeOfPayment" />
          <label htmlFor="payBySwift" className="to-support-block-label">
            Swift
          </label>
        </div>

        <div className="to-support-block-option-wrap">
          <input
            id="payByTransferInUkraine"
            type="radio"
            name="typeOfPayment"
          />
          <label
            htmlFor="payByTransferInUkraine"
            className="to-support-block-label"
          >
            Переказ по Україні
          </label>
        </div>

        <div className="to-support-block-option-wrap">
          <input id="payByCrypto" type="radio" name="typeOfPayment" />
          <label htmlFor="payByCrypto" className="to-support-block-label">
            Криптовалюта
          </label>
        </div>

        <div className="to-support-block-option-wrap">
          <input id="payByPayPal" type="radio" name="typeOfPayment" />
          <label htmlFor="payByPayPal" className="to-support-block-label">
            PayPal
          </label>
        </div>

        <ButtonToSupport />
      </form>
    </div>
  );
};

export default ToSupportBlock;
