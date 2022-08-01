import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import ListItem from '../components/ListItem';
import {useAppData} from '../providers/AppState';
import {IToDo} from '../resources/ITToDo';

const HomeScreen = ({navigation}) => {
  const [toDoList, setToDos] = useState<IToDo[]>([
    {text: 'Upcoming Deadline', completed: false, date: 'Time: HH:MM - DD:MM'},
    {text: 'Upcoming Deadline', completed: false, date: 'Time: HH:MM - DD:MM'},
    {text: 'Upcoming Deadline', completed: false, date: 'Time: HH:MM - DD:MM'},
    {text: 'Upcoming Deadline', completed: false, date: 'Time: HH:MM - DD:MM'},
    {text: 'Upcoming Deadline', completed: false, date: 'Time: HH:MM - DD:MM'},
  ]);
  const {activeUser} = useAppData();

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <View style={styles.wrapper}>
      <Header headerTitle={activeUser.email}></Header>
      <ScrollView style={{flex: 1}}>
        <View style={styles.bodyTop}>
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
