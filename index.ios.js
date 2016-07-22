import React, { Component } from 'react';
import { StyleSheet, Navigator, AppRegistry} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';


class ReactNativePrototype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "Picture"

        }
    }

    render() {
        return(
            <AppNavigator
                initialRoute={{ident: "Login"}} />
        );
    }
}
const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ReactNativePrototype', () => ReactNativePrototype);
