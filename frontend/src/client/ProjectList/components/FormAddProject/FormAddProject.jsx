import React from 'react';
import { Formik, Form, Field } from "formik";
import FieldErrorMsg from "../../../shared/components/FieldErrorMsg";
import './FormAddProject.scss';
import { validate } from "./validate";
import { initialValues } from "./initialValues";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

const FormAddProject = ({addTask}) => {
  const { t } = useTranslation();

  return (
    <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={ (values, {resetForm}) => {
              addTask(values.taskName);
              resetForm(initialValues);
            }}>

      <Form>
        <FieldErrorMsg name="taskName" />
        <div className="tasker-header">
          <Field type="text" name="taskName" placeholder="Enter a project" className="tasker-field" />
          <button type="submit" className="tasker-button">
            <i className="fa fa-fw fa-plus" />
          </button>
        </div>
      </Form>

    </Formik>
  );
};

export default FormAddProject;
