import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Calendar} from 'react-native-calendars';
import {IToDo} from '../resources/ITToDo';
import {GetTasks} from '../services/dbService';
import {getStringDate} from '../helpers';

const CalendarScreen = () => {
  const datesMarked: any = {'2022-08-15': {marked: true, dotColor: '#50cebb'}};
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const getTasks = async () => {
    var myTasks = await GetTasks();
    toDoList.splice(0);
    if (myTasks != null) {
      myTasks.forEach((task: IToDo) => {
        toDoList.push(task);
        var timestamp = task.deadline;
        var strDate = getStringDate(timestamp);
        datesMarked[strDate] = {marked: true, dotColor: '#50cebb'};
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      getTasks();
    }
  }, [isFocused]);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.content]}>
        {loading ? (
          <Text>Items Loading</Text>
        ) : (
          <>
            <Calendar style={styles.calandar} markedDates={datesMarked} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  calandar: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
  },
});

export default CalendarScreen;
