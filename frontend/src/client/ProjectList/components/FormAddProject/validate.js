export const validate = (values) => {
    const errors = {};

    if (!values.taskName) {
        errors.taskName = 'Please enter a project';
    }

    return errors;
};
