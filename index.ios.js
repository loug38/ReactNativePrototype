import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Navigator, View, Text} from 'react-native';
import StatusBarBackground from './app/components/StatusBarBackground';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';
import PersonShowScreen from './app/screens/PersonShowScreen';
import LoginScreen from './app/screens/LoginScreen';


class ReactNativePrototype extends Component {
    render() {
        return(
            <Navigator
                initialRoute={{ident:"Login"}}
                ref="appNavigator"
                style={styles.navigatorStyles}
                renderScene={this._renderScene}
                configureScene={(route) => ({
                    ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
                })}
            />
        );
    }

    _renderScene(route, navigator){
        var globalNavigatorProps = { navigator }

        switch(route.ident){
            case "PeopleIndex":
                return (
                    <PeopleIndexScreen {...globalNavigatorProps } />
                );

            case "PersonShow":
                return (
                    <PersonShowScreen {...globalNavigatorProps}
                        person={route.person}
                    />
                );

            case "Login":
                return (
                    <LoginScreen {...globalNavigatorProps} />
                );
            default:
            //can do a route not found or some error handler here. (Maybe dev err message)
                return(
                    <PeopleIndexScreen {...globalNavigatorProps } />
                );
        }
    }
}

  const styles = StyleSheet.create({
      navigatorStyles: {

      }
  });


AppRegistry.registerComponent('ReactNativePrototype', () => ReactNativePrototype);
