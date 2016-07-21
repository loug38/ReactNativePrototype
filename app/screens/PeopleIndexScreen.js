import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, ListView, TouchableOpacity } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';


const people = [
    {firstName: "Oliver", lastName: "Queen", id: "Green Arrow"},
    {firstName: "Hal", lastName: "Jordan", id: "Green Lantern"},
    {firstName: "Barry", lastName: "Allen", id: "Flash"},
    {firstName: "Clark", lastName: "Kent", id: "Superman"}
];

class PeopleIndexScreen extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            peopleDataSource: ds.cloneWithRows(people),
        };
    }

     render() {
         return(
             <ViewContainer>
                <StatusBarBackground backgroundColor = '#5F89B3'/>
                <ListView
                    style={{marginTop: 100}}
                    dataSource={this.state.peopleDataSource}
                    renderRow={(person) => {return this._renderPersonRow(person)}}
                />
             </ViewContainer>
         );
     }

     _renderPersonRow(person){
         return (
             <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
                 <Text style={styles.personName}>
                    {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}
                </Text>
                <View style={{flex: 1}}/>
                <Icon name="chevron-right" style={styles.personMoreIcon} />
             </TouchableOpacity>
         )
     }

     _navigateToPersonShow(person){
         this.props.navigator.push({
             ident: "PersonShow",
             person: person,
         });
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    personRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },

    personName: {
        marginLeft: 20,
    },

    personMoreIcon: {
        color: '#5F89B3',
        height: 20,
        width: 20,
        marginRight: 20,
    },
});

module.exports = PeopleIndexScreen;
