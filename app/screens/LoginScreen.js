import React, { Component } from 'react';``
import { StyleSheet, AppRegistry, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import StatusBarBackground from '../components/StatusBarBackground';
import Button from '../../node_modules/react-native-button';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _navigateToPersonIndex(){
        this.props.navigator.push({
            ident: "PeopleIndex",
        });
    }

    render() {
        return (
            <View>
                <StatusBarBackground backgroundColor = '#5F89B3'/>
                <View style={styles.container}>
                    <StatusBarBackground backgroundColor = '#5F89B3'/>
                    <Image style={styles.logoStyle}
                        source={require('../../img/loginlogo1.png')}
                    />
                    <View style={styles.border}>
                        <TextInput style={styles.loginNameField}
                            onChangeText={(text) => this.setState({text})}
                            placeholder=" Login"
                        />
                    </View>
                    <View style={styles.border}>
                        <TextInput secureTextEntry={true}
                            style={styles.passwordField}
                            onChangeText={(text) => this.setState({text})}
                            placeholder=" Password"
                        />
                    </View>
                    <Button onPress={() => this._navigateToPersonIndex()}
                        style={styles.loginButton}>
                            Login
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  border: {
      height: 40,
      width: 350,
      paddingBottom: 0,
      paddingLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#aaaaaa',
      borderBottomWidth: 1,
      borderBottomColor: '#aaaaaa',
  },

  loginNameField: {
      height: 40,
      width: 200,
  },

  passwordField: {
      height: 40,
      width: 200,
  },

  logoStyle: {
      width: 250,
      height: 200,
      marginBottom: 40,
      marginTop: 100,
      resizeMode: 'contain',
  },

  loginButton: {
      borderRadius: 8,
      overflow: 'hidden',
      width: 150,
      padding: 10,
      marginTop: 40,
      fontSize: 30,
      color: 'white',
      backgroundColor: '#5F89B3',
  }

});

module.exports = LoginScreen;
