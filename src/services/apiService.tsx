const USERNAME = 'Jane';
const PASS = '12345';

export async function signUP(username: string, password: string, callback) {
  await sleep(2000);
  if (username === USERNAME && password === PASS) {
    callback('SUCCESS');
  } else {
    callback('Login Failed');
  }
}

// Function with a promise:Promise<>
export async function signupPR(username, password): Promise<any> {
  //   sleep(2000);
  return new Promise((resolve, reject) => {
    if (username === USERNAME && password === PASS) {
      const successObject = {
        msg: 'Success',
      };
      resolve(successObject);
    } else {
      const errObject = {
        msg: 'Error Occored',
      };
      reject(errObject);
    }
  });
}

export async function signInAsync(username, passowrd) {
  await sleep(2000);
  if (username === USERNAME && passowrd === PASS) {
    return 'SUCCESS';
  } else {
    return 'Login Failed';
  }
}

export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
