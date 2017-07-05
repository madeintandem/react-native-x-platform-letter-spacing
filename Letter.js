import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const Letter = (props) => {
  const { children, isLast, spacing, textStyle } = props

  const letterStyles = [
    textStyle,
    { paddingRight: spacing },
    isLast && styles.lastLetter
  ]

  return <Text style={letterStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  lastLetter: {
    paddingRight: 0
  }
})
