import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import Encypto from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {validateEmail} from '../helpers';
if (Platform.OS === 'ios') {
  //Load fonts if using use_frameworks
  AntIcon.loadFont();
  Encypto.loadFont();
}

import {singInUserFirebase} from '../services/apiService';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [error, setError] = useState<Boolean>(false);
  const [errorMsg, setErrorMsg] = useState<String>('');

  const resetError = () => {
    setError(false);
    setErrorMsg('');
  };

  async function handleLogin() {
    if (username === '') {
      setErrorMsg('Email is Empty');
      setError(true);
      return;
    }
    if (password === '') {
      setErrorMsg('Password is Empty');
      setError(true);
      return;
    }
    if (!validateEmail(username)) {
      setErrorMsg('Email is Inorrect');
      setError(true);
      return;
    }
    setErrorMsg('');
    setError(false);
    try {
      await singInUserFirebase(username, password)
        .then(userCred => {
          Alert.alert('Login Success');
          console.log(userCred.user.uid);
          navigation.reset({
            index: 0,
            routes: [{name: 'bottomNav', params: {username, password}}],
          });
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid Email');
          }
          console.error(error);
        });
    } catch (error) {
      Alert.alert(`Error ${error}`);
    }
  }
  return (
    <View style={styles.mainBody}>
      <View>
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('./../../assets/images/Logo_noBG.png')}
              style={styles.imageStyle}
            />
          </View>
          <Text style={styles.errorTextStyle}>{errorMsg}</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              textAlign={'center'}
              onChange={resetError}
              placeholder={'Username'}
              onChangeText={setUsername}
              clearTextOnFocus
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              textAlign={'center'}
              onChange={resetError}
              onChangeText={setPassword}
              placeholder="Password"
              clearTextOnFocus
              inlineImageLeft="favicon"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              handleLogin();
            }}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('signUp')}>
          New Here ? Register
        </Text>
        <View style={styles.signUpRow}>
          <TouchableOpacity style={styles.signUpImages}>
            <Encypto name="facebook" size={32} color="#4A57A3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <Encypto name="twitter" size={32} color="#4A57A3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <AntIcon name="google" size={32} color="#4A57A3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#D0D0E3',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  imageStyle: {
    width: 160,
    height: 150,
    resizeMode: 'stretch',
    margin: 30,
  },
  buttonStyle: {
    backgroundColor: '#4A57A3',
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    height: 50,
    borderColor: '#4A57A3',
    borderRadius: 10,
    width: '80%',
    fontStyle: 'italic',
    fontSize: 16,
    flex: 1,
    color: '#0A2126',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
  },
  registerTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    color: '#4A57A3',
    textDecorationLine: 'underline',
  },
  errorTextStyle: {
    color: '#880808',
    textAlign: 'center',
    fontSize: 14,
  },
  signUpRow: {
    flex: 0.2,
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpImages: {
    margin: 20,
    width: 50,
    height: 50,
  },
});
