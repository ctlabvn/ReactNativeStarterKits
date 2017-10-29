import React from 'react';
import { StyleSheet, Platform, Image, View } from 'react-native';
import { Button, Text } from 'native-base';
import firebase from 'react-native-firebase';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  authenticate = async () =>{    
    const user = await firebase.auth().signInWithEmailAndPassword(
      "tu@agiletech.vn","12345678");

    console.log(user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('~/assets/images/RNFirebase512x512.png')} style={[styles.logo]} />
        <Text style={styles.welcome}>
          Welcome to the React Native{'\n'}Firebase starter project!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        ) : (
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Cmd+M or shake for dev menu
          </Text>
        )}
        <View style={styles.modules}>
          <Text style={styles.modulesHeader}>The following Firebase modules are enabled:</Text>
          {firebase.admob.nativeModuleExists && <Text>Admob</Text>}
          {firebase.analytics.nativeModuleExists && <Text>Analytics</Text>}
          {firebase.auth.nativeModuleExists && <Text onPress={this.authenticate}>Authentication</Text>}
          {firebase.crash.nativeModuleExists && <Text>Crash Reporting</Text>}
          {firebase.firestore.nativeModuleExists && <Text>Cloud Firestore</Text>}
          {firebase.messaging.nativeModuleExists && <Text>Messaging</Text>}
          {firebase.perf.nativeModuleExists && <Text>Performance Monitoring</Text>}
          {firebase.database.nativeModuleExists && <Text>Realtime Database</Text>}
          {firebase.config.nativeModuleExists && <Text>Remote Config</Text>}
          {firebase.storage.nativeModuleExists && <Text>Storage</Text>}
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
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,    
    alignItems: 'center',
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
});