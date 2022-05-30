import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (prop) => {
  const { headerTitle } = prop;
  const [date, setDate] = useState("");

  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let dateString = d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear();

    setDate(dateString);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>{headerTitle + " 's Day"}</Text>
      <Text style={styles.headerText}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A57A3",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
