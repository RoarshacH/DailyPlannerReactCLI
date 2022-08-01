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
  const user = auth().currentUser;
  if (user) {
    return {
      username: 'Random Name',
      email: user.email,
      userId: userId,
    };
  } else {
    return {
      username: 'Test User',
      email: 'user@user.com',
      userId: userId,
    };
  }
}
