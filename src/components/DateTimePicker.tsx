import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntIcon from 'react-native-vector-icons/AntDesign';

if (Platform.OS === 'ios') {
  //Load fonts if using use_frameworks
  AntIcon.loadFont();
}

const DateTimePicker = ({dateTime}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    dateTime(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dateButtonStyle}
        activeOpacity={0.5}
        onPress={showDatePicker}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.buttonTextStyle}>
            <AntIcon name="calendar" size={28} />
          </Text>

          <Text style={styles.buttonTextStyle}>
            <AntIcon name="clockcircleo" size={27} />
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  dateButtonStyle: {
    backgroundColor: '#4A57A3',
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    margin: 10,
  },
});

export default DateTimePicker;
