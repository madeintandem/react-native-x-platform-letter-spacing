import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextWithLetterSpacing } from './TextWithLetterSpacing'

const SPACING = 5

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <TextWithLetterSpacing spacing={SPACING}>Hello World</TextWithLetterSpacing>
        <TextWithLetterSpacing spacing={SPACING} viewStyle={styles.withSpacingViewStyle}>Hello World</TextWithLetterSpacing>
        <TextWithLetterSpacing spacing={SPACING} textStyle={styles.withSpacingTextStyle}>Hello World</TextWithLetterSpacing>
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
    letterSpacing: SPACING
  },
  withSpacingViewStyle: {
    paddingBottom: 2,
    borderBottomWidth: 1
  },
  withSpacingTextStyle: {
    textDecorationLine: 'underline'
  }
});
