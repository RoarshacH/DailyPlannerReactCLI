import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {validateInputsSignUp} from '../helpers';
import {signupUserFirebase} from '../services/apiService';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [confirmEmail, setconfirmEmail] = useState<String>('');
  const [error, setError] = useState<Boolean>(false);
  const [errorMsg, setErrorMsg] = useState<String>('');

  const resetError = () => {
    setError(false);
    setErrorMsg('');
  };

  async function handleSubmit() {
    const result = validateInputsSignUp(
      username,
      email,
      confirmEmail,
      password,
    );
    if (result.error) {
      setErrorMsg(result.msg);
      setError(result.error);
      return;
    }
    setErrorMsg('');
    setError(false);
    try {
      await signupUserFirebase(email, password)
        .then(() => {
          Alert.alert('User Created Successfully');
          navigation.reset({
            index: 0,
            routes: [{name: 'login'}],
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!!');
          }

          console.error(error);
        });
    } catch (error) {
      Alert.alert(`Error ${error}`);
    }
  }
  return (
    <View style={styles.mainBody}>
      <View style={{flex: 0.2}}></View>
      <ScrollView>
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headerTextStyle}>Sign Up</Text>
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
              onChangeText={setEmail}
              placeholder="Email"
              clearTextOnFocus
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              textAlign={'center'}
              onChange={resetError}
              onChangeText={setconfirmEmail}
              placeholder="Confirm Email"
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
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('login')}>
          Already a User? Login Here!
        </Text>
      </ScrollView>
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 20,
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
  headerTextStyle: {
    height: 100,
    margin: 30,
    color: '#4A57A3',
    textAlign: 'center',
    fontSize: 32,
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
});
