import toast from "react-hot-toast";

export async function usernameValidate(values) {
  const errors = validateUsername({}, values);

  return errors;
}

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

export async function resetPasswordValidate(values) {
  const errors = resetPassword({}, values);

  return errors;
}

function resetPassword(errors = {}, values) {
  if (!values.newPassword || !values.confirmPassword) {
    errors.exist = toast.error("Password cannot be empty!");
  } else if (values.newPassword !== values.confirmPassword) {
    errors.exist = toast.error("Password not matching!");
  }

  return errors;
}

function passwordVerify(errors = {}, values) {
  if (!values.password || values.password.includes(" ")) {
    console.log("HAHA");

    errors.password = toast.error("Password cannot be Empty!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password too short");
  }

  return errors;
}

function validateUsername(error = {}, values) {
  if (!values.username || values.username.includes(" ")) {
    error.username = toast.error("Username Required!");
  }

  return error;
}
