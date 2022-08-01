import auth from '@react-native-firebase/auth';

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

export async function fetchUser(userId: String): Promise<any> {
  return {
    username: 'Random Name',
    email: 'user@user.com',
    userId: userId,
  };
}
