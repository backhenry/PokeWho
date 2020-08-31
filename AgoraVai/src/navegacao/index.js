import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'
//chamando a Stack para iniciar a naveção, podem ser implementadas mais telas
export default props => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  </SafeAreaView>
)