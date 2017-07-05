import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Letter } from './Letter'

const isLast = (collection, index) => collection.length - 1 === index

export const TextWithLetterSpacing = (props) => {
  const { children, spacing, viewStyle, textStyle } = props
  const letters = children.split('')

  return <View style={[styles.container, viewStyle]}>
    {letters.map((letter, index) =>
      <Letter key={index} spacing={spacing} isLast={isLast(letters, index)} textStyle={textStyle}>
        {letter}
      </Letter>
    )}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
