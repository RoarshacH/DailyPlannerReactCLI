export const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validateInputsLogin = (email, password) => {
  var error = false;
  var msg = '';
  if (email === '') {
    msg = 'Email is Empty';
    error = true;
  }
  if (password === '') {
    msg = 'Password is Empty';
    error = true;
  }
  if (!validateEmail(email)) {
    msg = 'Email is Inorrect';
    error = true;
  }
  return {msg, error};
};
