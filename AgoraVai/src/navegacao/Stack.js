import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../pages/main'
import Inicial from '../pages/inicial'


const Stack = createStackNavigator()

export default props => {
   return (
      //iniciando a pilha de Stacks
      <Stack.Navigator initialRouteName="TelaInicial"
         screenOptions={{ headerShown: false }}>
         <Stack.Screen name="TelaInicial" component={Inicial} />
         <Stack.Screen name="Main" component={Main} screenOptions={{ headerShown: false }}/>
      </Stack.Navigator>
   )
}

