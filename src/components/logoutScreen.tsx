import React, {useEffect} from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

import {singOutUserFirebase} from '../services/apiService';

export function LogoutScreen(props) {
  const {navigation, route} = props;
  const signout = () => {
    Alert.alert('Attention \n', ' Do you really want to sign out!', [
      {
        text: 'Yes',
        onPress: () => {
          singOutUserFirebase()
            .then(() => {
              Alert.alert('Successfully Logged Out');
              navigation.reset({
                index: 0,
                routes: [{name: 'login'}],
              });
            })
            .catch(error => {
              Alert.alert('Logout Error');
            });
        },
      },
      {
        text: 'No',
        onPress: () => {
          navigation.goBack();
        },
        style: 'cancel',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
