import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '../components/DateTimePicker';
import {IToDo} from '../resources/ITToDo';

if (Platform.OS === 'ios') {
  //Load fonts if using use_frameworks
  AntIcon.loadFont();
}

export default function AddTaskScreen({navigation}) {
  const [taskTitle, setTitle] = useState<String>('');
  const [taskPriority, setPriority] = useState<String>('');
  const [taskNotes, setNotes] = useState<String>('');
  const [taskDeadline, setDeadline] = useState<Date>(new Date());

  const [error, setError] = useState<Boolean>(false);

  const resetError = () => {
    setError(false);
  };

  const setToDo = () => {
    var toDo: IToDo = {
      text: taskTitle.toString(),
      completed: false,
      date: taskDeadline.toISOString(),
      deadline: taskDeadline,
      priority: taskPriority.toString(),
      notes: taskNotes.toString(),
    };
    console.log(toDo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.size}>
        {'\n'} {'\n'} Add your task {'\n'}{' '}
      </Text>

      <Text>Enter Task Title</Text>

      <TextInput
        style={styles.input}
        textAlign={'center'}
        onChange={resetError}
        onChangeText={setTitle}
        clearTextOnFocus
      />

      <Text style={styles.textStyle}> Enter Task Priority </Text>

      <TextInput
        style={styles.input}
        textAlign={'center'}
        onChange={resetError}
        onChangeText={setPriority}
        clearTextOnFocus
      />

      <Text style={styles.textStyle}>Any Notes?</Text>

      <TextInput
        style={styles.notes}
        textAlign={'center'}
        onChange={resetError}
        onChangeText={setNotes}
        clearTextOnFocus
      />

      <Text>Pick Remainder Date Time</Text>
      <View style={{flexDirection: 'row'}}>
        <DateTimePicker />
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.dateButtonStyle}
          activeOpacity={0.5}
          onPress={() => Alert.alert('Pick Date and Time')}>
          <Text style={styles.buttonTextStyle}>
            <AntIcon name="calendar" size={28} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateButtonStyle}
          activeOpacity={0.5}
          onPress={() => Alert.alert('Pick Date and Time')}>
          <Text style={styles.buttonTextStyle}>
            <AntIcon name="clockcircleo" size={28} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonTextStyle}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
            setToDo();
          }}>
          <Text style={styles.buttonTextStyle}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    backgroundColor: '#D0D0E3',
    margin: 10,
    width: 350,
    borderRadius: 10,
    color: '#4A57A3',
  },
  notes: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    backgroundColor: '#D0D0E3',
    margin: 10,
    width: 350,
    height: 100,
    borderRadius: 10,
    color: '#4A57A3',
  },
  size: {
    marginTop: 50,
    fontSize: 30,
    color: '#4A57A3',
  },
  textStyle: {
    fontSize: 18,
    color: '#4A57A3',
  },

  buttonStyle: {
    backgroundColor: '#4A57A3',
    width: 150,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    margin: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },

  dateButtonStyle: {
    backgroundColor: '#4A57A3',
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    margin: 10,
  },
});
