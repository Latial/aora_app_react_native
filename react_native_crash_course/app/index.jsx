import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../constants'
import CustomButton from '../components/CustomButton'

export default function App() {
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle = {{height : '100%'}}>
        <View className = "w-full justify-start items-center min-h-[85vh] px-4">
          <Image 
          className = "w-[130px] h-[130px]"
          source= {images.logo}
          resizeMode = "contain"
          />
          <Image source={images.cards}
          className = "max-w-[380px] w-full h-[300px]"
          resizeMode= 'contain'/>
          <View className = "relative mt-5" >
          <Text className = "text-3xl text-white font-bold text-center">
            Unleash infinite opportunities with {' '}
            <Text className = "text-secondary-200">Aora</Text>
          </Text>
          <Image source={images.path} className = "w-[136px] h-[15px] absolute -bottom-2 right-20" resizeMode = 'contain'/>
        </View>
        <Text className = "text-sm font-pregular text-gray-100 mt-7 text-center">
          Where Creativity and Innovation Converge: Begin Your Journey of Boundless Discovery with Aora
        </Text>
        <CustomButton title = "Continue with email" handlePress = {() => router.push('/sign-in')} containerStyles = "w-full mt-7"/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
} 
