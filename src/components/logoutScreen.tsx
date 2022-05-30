import React, { useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

export function LogoutScreen(props) {
  const { navigation, route } = props;
  const signout = () => {
    Alert.alert("Attention \n", " Do you really want to sign out!", [
      {
        text: "Yes",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "login" }],
          });
        },
      },
      {
        text: "No",
        onPress: () => {
          navigation.goBack();
        },
        style: "cancel",
      },
    ]);
  };

  //   useEffect(() => {
  //     signout();
  //   }, []);

  return (
    <View style={styles.wrapper}>
      <Button title="Logout" onPress={signout} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
