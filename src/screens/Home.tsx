import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';

import Header from '../components/Header';
import ListItem from '../components/ListItem';
import {useAppData} from '../providers/AppState';
import {IToDo} from '../resources/ITToDo';
import {GetAllTasks} from '../services/dbService';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [newData, setNewData] = useState(false);
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const {activeUser} = useAppData();

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  useEffect(() => {
    setLoading(true);
    getTasks();
  }, []);

  const getTasks = async () => {
    var myTasks = await GetAllTasks();
    toDoList.splice(0);
    if (myTasks != null) {
      myTasks.forEach((task: IToDo) => {
        console.log('ToDoDB' + task.text);
        toDoList.push(task);
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header headerTitle={activeUser.username}></Header>
      <ScrollView style={{flex: 1}}>
        <View style={styles.bodyTop}>
          {loading ? (
            <Text>No ToDo Items</Text>
          ) : (
            <View>
              {toDoList.map((toDo: IToDo, index: number) => {
                return (
                  <ListItem
                    key={index}
                    index={index}
                    title={toDo.text}
                    date={toDo.date}
                    completed={toDo.completed}
                    toggleComplete={toggleComplete}
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bodyBottom}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            navigation.push('addTask');
          }}>
          <Image
            style={styles.imagebutton}
            source={require('./../../assets/images/fabImageAlt.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  bodyTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },
  bodyBottom: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagebutton: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  roundButton: {
    borderRadius: 50,
    height: 40,
    width: 40,
    position: 'relative',
    bottom: 0,
    right: -150,
    backgroundColor: '#4A57A3',
  },
});

export default HomeScreen;
