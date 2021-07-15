import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text,StyleSheet, ScrollView } from 'react-native'

export default function Screen({children}) {
  return (
    <ScrollView style ={styles.container}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:StatusBar.currentHeight,
    paddingHorizontal:15,
    backgroundColor: '#f3f3f3',
  }
})
