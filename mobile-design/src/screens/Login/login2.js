import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../../../../assets/iteslab.png')}
          style={{ width: '90%', height: "25%", borderRadius: 30, backgroundColor: "#FFFFFF" }} 
        />
        
        <View style={styles.inputContainer1}></View>
        
       
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(username) => this.setState({ username })}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/nolan/40/000000/email.png' }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/nolan/40/000000/key.png' }}
          />
        </View>

        <TouchableOpacity style={styles.btnForgotPassword}>
          <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: "90%",
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer1: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  btnText: {
    color: "white",
    fontWeight: 'bold',
  },
});
