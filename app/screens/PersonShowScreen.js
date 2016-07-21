import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, ListView, TouchableOpacity, Image, Dimensions } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

//You can import from one file into both iOS and android like:
//import message from "./temp"

const window = Dimensions.get('window');

class PersonShowScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        switch(this.props.person.id){
            case "Green Arrow": {
                return (
                    <ViewContainer>
                        <StatusBarBackground backgroundColor = '#5F89B3'/>
                        <Text style={styles.indentity}>
                            { this.props.person.id }
                        </Text>
                        <Text style={styles.personName}>
                            {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}
                        </Text>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../img/greenArrow.jpg')}
                        />
                    </ViewContainer>
                );
            }
            case "Green Lantern": {
                return (
                    <ViewContainer>
                        <StatusBarBackground backgroundColor = '#5F89B3'/>
                        <Text style={styles.indentity}>
                            { this.props.person.id }
                        </Text>
                        <Text style={styles.personName}>
                            {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}
                        </Text>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../img/greenLantern.jpg')}
                        />
                    </ViewContainer>
                );
            }
            case "Superman": {
                return (
                    <ViewContainer>
                        <StatusBarBackground backgroundColor = '#5F89B3'/>
                        <Text style={styles.indentity}>
                            { this.props.person.id }
                        </Text>
                        <Text style={styles.personName}>
                            {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}
                        </Text>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../img/superman.jpg')}
                        />
                    </ViewContainer>
                );
            }
            case "Flash": {
                return (
                    <ViewContainer>
                        <StatusBarBackground backgroundColor = '#5F89B3'/>
                        <Text style={styles.indentity}>
                            { this.props.person.id }
                        </Text>
                        <Text style={styles.personName}>
                            {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}
                        </Text>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../img/flash.jpg')}
                        />
                    </ViewContainer>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
  personName: {
      backgroundColor: '#afdef8',
      fontSize: 15,
      padding: 10,
  },

  indentity: {
      backgroundColor: '#8Fbce6',
      alignItems: 'center',
      padding: 2,
      fontSize: 20,
  },

  imageStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      height: window.height - 90,
      width: window.width,
  },

});

module.exports = PersonShowScreen;
