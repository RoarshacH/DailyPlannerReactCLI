import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

const ListItem = (prop) => {
  const { title, date, completed, index, toggleComplete } = prop;

  const completeTask = () => {
    Alert.alert("Attention \n", "Complete The Task?", [
      {
        text: "Yes",
        onPress: () => {
          toggleComplete(index);
        },
      },
      {
        text: "No",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.wrapper}>
      {completed ? <Text style={styles.doneTextStyle}>{title}</Text> : <Text style={styles.notDoneTextStyle}>{title} </Text>}
      {completed ? <Text style={styles.doneTextStyle}>{date}</Text> : <Text style={styles.notDoneTextStyle}>{date} </Text>}
      <TouchableOpacity onPress={completeTask}>
        <Text style={styles.doneButtonStyle}>Done?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "70%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D0D0E3",
    margin: 10,
    borderRadius: 10,
  },
  doneButtonStyle: { color: "#4A57A3", textDecorationStyle: "solid", textDecorationLine: "underline" },
  doneTextStyle: { textDecorationLine: "line-through", color: "#4A57A3" },
  notDoneTextStyle: { color: "black" },
});

export default ListItem;
