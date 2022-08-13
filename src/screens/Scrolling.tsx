import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import ListItem from '../components/ListItem';

import {IToDo} from '../resources/ITToDo';
import {GetTasks} from '../services/dbService';

const ScrollViewScreen = () => {
  // Just for test
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  const getTasks = async () => {
    var myTasks = await GetTasks();
    toDoList.splice(0);
    if (myTasks != null) {
      myTasks.forEach((task: IToDo) => {
        console.log('ToDoDB' + task.text);
        toDoList.push(task);
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getTasks();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.content]}>
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
      <View style={[styles.footer]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#eee',
  },
});

export default ScrollViewScreen;
