import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextWithLetterSpacing } from './TextWithLetterSpacing'

const SPACING = 5

const Section = (props) => (<View style={styles.section}>{props.children}</View>)
const Label = (props) => (<Text style={styles.label}>{props.children}</Text>)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Label>iOS only letter spacing:</Label>
        <Section>
          <Text style={{ letterSpacing: SPACING }}>Hello World</Text>
        </Section>

        <Label>TextWithLetterSpacing example:</Label>
        <Section>
          <TextWithLetterSpacing spacing={SPACING}>Hello World</TextWithLetterSpacing>
        </Section>

        <Label>TextWithLetterSpacing with viewStyle example:</Label>
        <Section>
          <TextWithLetterSpacing spacing={SPACING} viewStyle={styles.withSpacingViewStyle}>
            Hello World
          </TextWithLetterSpacing>
        </Section>

        <Label>TextWithLetterSpacing with textStyle example:</Label>
        <Section>
          <TextWithLetterSpacing spacing={SPACING} textStyle={styles.withSpacingTextStyle}>
            Hello World
          </TextWithLetterSpacing>
        </Section>
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
  section: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 15,
    margin: 5
  },
  label: {
    marginTop: 20,
    width: '80%',
    textAlign: 'center'
  },
  withSpacingViewStyle: {
    paddingBottom: 2,
    borderBottomWidth: 1
  },
  withSpacingTextStyle: {
    textDecorationLine: 'underline'
  }
});
