export const validate = (values) => {
    const errors = {};

    if (!values.projectName) {
        errors.projectName = 'Please enter a project';
    }

    return errors;
};
