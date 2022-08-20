import React from 'react';
import { ErrorMessage } from "formik";
import './FieldErrorMsg.scss';

const FieldErrorMsg = ({name}) => {
    return (
      <ErrorMessage name={name}>
          {(error)=> {
              return <div className="field-error">{error}</div>
          }}
      </ErrorMessage>
    );
};

export default FieldErrorMsg;
