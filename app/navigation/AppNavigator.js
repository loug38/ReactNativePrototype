import React, { Component } from 'react';
import { StyleSheet, Navigator, View, Text} from 'react-native';
import PeopleIndexScreen from '../../app/screens/PeopleIndexScreen';
import PersonShowScreen from '../../app/screens/PersonShowScreen';
import LoginScreen from '../../app/screens/LoginScreen';


class AppNavigator extends Component {
    render() {
        return(
            <Navigator
                initialRoute={{ident: this.props.initialRoute}}
                ref="appNavigator"
                style={styles.navigatorStyles}
                renderScene={this._renderScene}
                //unless specified otherwise float in new screens from right.
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
                    <LoginScreen {...globalNavigatorProps } />
                );
        }
    }
}

  const styles = StyleSheet.create({
      navigatorStyles: {

      }
  });


module.exports = AppNavigator;
