import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextWithLetterSpacing } from './TextWithLetterSpacing'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <TextWithLetterSpacing spacing={5}>Hello World</TextWithLetterSpacing>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 5
  }
});
