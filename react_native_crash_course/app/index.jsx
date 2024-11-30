import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Link} from 'expo-router'

export default function App () {
  return (
    <View className = "flex-1 justify-center items-center bg-white">
        <Text className = "text-3xl font-pblack">Aora!</Text>
        <StatusBar style= "auto"></StatusBar>
        <Link href = "/profile" style = {{color : 'blue'}}>Go to Profile</Link>
    </View>
  )
} 
