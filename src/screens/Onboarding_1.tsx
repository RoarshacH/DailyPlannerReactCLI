import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Encypto from 'react-native-vector-icons/Entypo';

export default function Onboarding_1({navigation}) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Logo_noBG.png')}
      />
      <Text style={styles.font}>Welcome to Daily Planner</Text>

      <View style={styles.bottomArrows}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Encypto name="dots-three-horizontal" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('Onboarding_2');
          }}>
          <AntIcon name="arrowright" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D0E3',
    flexDirection: 'column',
  },
  image: {
    padding: 100,
    width: 300,
    height: 300,
  },

  font: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    padding: 20,
    color: '#4A57A3',
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bottomArrows: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 50,
  },
});
