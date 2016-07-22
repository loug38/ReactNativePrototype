import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, ListView, TouchableOpacity, Image, Dimensions, Navigator, TabBarIOS} from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

//You can import from one file into both iOS and android like:
//import message from "./temp"

const window = Dimensions.get('window');
var ScrollableTabView = require('react-native-scrollable-tab-view')

class PersonShowScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'bio',
        };
    }

    pictureHandleChange(){
        this.setState({
            selectedTab: 'picture',
        });
    }

    bioHandleChange(){
        this.setState({
            selectedTab: 'bio',
        });
    }

    render() {
        switch(this.props.person.id){
            case "Green Arrow": {
                var image = require('../../img/greenArrow.jpg');
                var powers = `Archery \nAgility \nMoney Survivability`;
                break;
            }
            case "Green Lantern": {
                var image = require('../../img/greenLantern.jpg');
                var powers = `Power Ring \nAgility \nAbility to overcome great fear`
                break;
            }
            case "Flash": {
                var image = require('../../img/flash.jpg');
                var powers = `Superspeed \nTimetravel \nInterdimensional travel \nFast Learning`
                break;
            }
            case "Superman": {
                var image = require('../../img/superman.jpg');
                var powers = `Super-strength \nSuper-speed \nHeat-vision \nIce-Breath \nTough Skin`
                break;
            }
        }

        return (
            <ViewContainer>
                <TabBarIOS>
                    <TabBarIOS.Item
                        title="Bio"
                        icon={require('../../img/face.png')}
                        selected={this.state.selectedTab === 'bio'}
                        onPress={this.bioHandleChange.bind(this)}>
                        <ViewContainer>
                            <StatusBarBackground backgroundColor = '#5F89B3' />
                            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                                <Icon name="chevron-left" style={styles.backIcon}>
                                    <Text style={{color: '#5F89B3'}}>
                                        {`  Back to index`}
                                    </Text>
                                </Icon>
                            </TouchableOpacity>
                            <Text style={styles.indentity}>
                                Name:
                                { ` ${this.props.person.id}` }
                            </Text>
                            <Text style={styles.personName}>
                                Secret Identity:
                                {` ${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}
                            </Text>
                            <Text style={styles.superPower}>
                                  Superpowers:
                            </Text>
                            <Text style={styles.listOfPowers}>
                                {powers}
                            </Text>
                        </ViewContainer>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="Picture"
                        icon={require('../../img/camera.png')}
                        selected={this.state.selectedTab === 'picture'}
                        onPress={this.pictureHandleChange.bind(this)}>
                        <ViewContainer>
                            <StatusBarBackground backgroundColor = '#5F89B3' />
                            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                                <Icon name="chevron-left" style={styles.backIcon}>
                                    <Text style={{color: '#5F89B3'}}>
                                        {`  Back to index`}
                                    </Text>
                                </Icon>
                            </TouchableOpacity>
                            <Image
                                style={styles.imageStyle}
                                source={image}
                            />
                        </ViewContainer>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
  personName: {
      backgroundColor: '#2D6791',
      color: '#ffffff',
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
      height: window.height - 120,
      width: window.width,
  },

  backIcon: {
      color: '#5F89B3',
      margin: 10,
  },

  superPower: {
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 10,
      fontSize: 13,
  },

  listOfPowers:{
      marginLeft: 15,
  },

});

module.exports = PersonShowScreen;
