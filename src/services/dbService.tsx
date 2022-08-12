import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {IToDo} from '../resources/ITToDo';
import {User} from '../resources/ITUser';

export async function addUser(
  userId: String,
  userName: String,
  email: String,
): Promise<any> {
  var user: User = {
    userId: userId.toString(),
    username: userName.toString(),
    email: email.toString(),
  };
  firestore()
    .collection('Users')
    .doc(userId.toString())
    .set(user)
    .then(() => {
      console.log('User added!');
    });
}

export async function getUser(userId: String): Promise<any> {
  const user = firestore()
    .collection('Users')
    .doc(userId.toString())
    .get()
    .then(documentSnapshot => {
      return documentSnapshot;
    });

  if ((await user).exists) {
    var newUser: User = (await user).data() as User;
    console.log(newUser);
    return newUser;
  } else {
    return {
      username: 'Test User',
      email: 'user@user.com',
      userId: userId,
    };
  }
}

export async function addTask(task: IToDo): Promise<any> {
  firestore()
    .collection('Tasks')
    .add(task)
    .then(() => {
      Alert.alert('New Task Added');
      console.log('Task added!');
      return true;
    })
    .catch(e => {
      Alert.alert('Error Adding Task');
      return false;
    });
}

export async function GetAllTasks(): Promise<IToDo[]> {
  var todoList: IToDo[] = [];
  var snapShot = firestore()
    .collection('Tasks')
    // Filter results
    .where('completed', '==', false)
    // Limit results
    .limit(2)
    .get()
    .then(querySnapshot => {
      return querySnapshot;
    });

  if ((await snapShot).empty) {
    console.log('No results');
    return todoList;
  } else {
    (await snapShot).docs.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      var todo: IToDo = doc.data() as IToDo;
      todo.id = doc.id;
      todoList.push(todo);
    });
    return todoList;
  }

  //   firestore()
  //     .collection('Tasks')
  //     // Filter results
  //     .where('completed', '==', false)
  //     .orderBy('date')
  //     // Limit results
  //     .limit(2)
  //     .get()
  //     .then(querySnapshot => {
  //       /* ... */
  //       querySnapshot.forEach(doc => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, ' => ', doc.data());
  //         var todo: IToDo = doc.data() as IToDo;
  //         todo.id = doc.id;
  //         todoList.push(todo);
  //       });
  //     });
}

export async function UpdateTask(taskID: String, task: IToDo): Promise<any> {
  firestore()
    .collection('Tasks')
    .doc(taskID.toString())
    .update({
      'info.address.zipcode': 94040,
    })
    .then(() => {
      console.log('User updated!');
    });
}
