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

export const validateInputsSignUp = (username, email, confEmail, password) => {
  var error = false;
  var msg = '';
  if (username === '') {
    msg = 'Username is Empty';
    error = true;
  }
  if (password === '') {
    msg = 'Password is Empty';
    error = true;
  }
  if (email != confEmail) {
    msg = 'Email and Confirm Email Does not match';
    error = true;
  }
  if (!validateEmail(email)) {
    msg = 'Email is Inorrect';
    error = true;
  }
  return {msg, error};
};

export const getStringDate = timestamp => {
  var date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000,
  );

  var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();

  if (month <= 9) {
    return year + '-0' + month + '-' + day;
  } else {
    return year + '-' + month + '-' + day;
  }
};
