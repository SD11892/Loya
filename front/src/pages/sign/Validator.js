// ******************************
export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "email":
      validateEmail(values.email, errors);
      break;
    case "password":
      validatePassword(values.password, errors);
      break;
    default:
  }
  return errors;
};

//
// ******************************
function validateEmail(email, errors) {
  let result = true;

  if (!email) {
    errors.email = "Email is Required";
    result = false;
  } else {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "Invalid Email address";
  }
  return result;
}
// ******************************
function validatePassword(pass, errors) {
  let result = true;

  if (!pass) {
    errors.password = "Password is Required";
    result = false;
  } else {
    var lower = /(?=.*[a-z])/;
    result = lower.test(pass);

    if (!result) {
      errors.password = "Password must contain at least one lower case letter.";
      result = false;
    } else if (pass.length < 8) {
      errors.password = "Your password has less than 8 characters.";
      result = false;
    }
  }

  return result;
}
