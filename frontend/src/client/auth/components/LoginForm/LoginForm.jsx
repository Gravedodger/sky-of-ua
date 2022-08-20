import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginFormFields } from "./fields";
import { signInRequestCreator } from "../../reducers/loginFormActionCreators";
import { useTranslation } from "react-i18next";
import ("../../../../i18n");

const LoginForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(signInRequestCreator(values));
    };

    const initialValues = {
        "email": "",
        "password": "",
        "submit": "Sign in",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('{t("invalidEmail")}').required('{t("required")}'),
        password: Yup.string().min(6, "{t('min')} 6!").required('{t("required")}'),
    })

    const formikProps = {
        initialValues,
        onSubmit,
        validationSchema,
    }

    return (
        <Formik { ...formikProps } >
            <Form>
                <Field { ...loginFormFields.email } />
                <ErrorMessage name={loginFormFields.email.name} />

                <Field { ...loginFormFields.password } />
                <ErrorMessage name={loginFormFields.password.name} />

                <Field { ...loginFormFields.submit } />
            </Form>
        </Formik>
    )
}

export default LoginForm;
