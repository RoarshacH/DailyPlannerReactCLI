const USERNAME = 'Jane';
const PASS = '12345';

import auth from '@react-native-firebase/auth';

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

// Firebase Authentication Functions
export async function signupUserFirebase(
  username: String,
  password: String,
): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export async function singInUserFirebase(
  username: String,
  password: String,
): Promise<any> {
  return auth().signInWithEmailAndPassword(username, password);
}

export async function singOutUserFirebase(): Promise<any> {
  return auth().signOut();
}
