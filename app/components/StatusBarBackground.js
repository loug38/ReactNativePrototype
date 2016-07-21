import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return(
            <View style={[styles.statusBarBackground, {backgroundColor: this.props.backgroundColor}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: 20,
        backgroundColor: '#5F89B3',
    }
});

module.exports = StatusBarBackground;
