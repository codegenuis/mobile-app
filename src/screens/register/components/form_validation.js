// validation of form fields
const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Required';
  } else if ((Number.isNaN(values.phonenumber))) {
    errors.phonenumber = 'Must be a number';
  } else if (Number(values.phonenumber) < 12) {
    errors.phonenumber = 'Sorry, number cannot be less than 12 digits';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default validate;

