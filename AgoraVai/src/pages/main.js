import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Pokeapi from '../services/pokeapi'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../components/estilos'
export default class Main extends Component {

  //renderizando a tela principal, chamando os estilos necessários 
  //e retornando as Views com o resultado da API
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/pokewho.png')}/>
        <View style={styles.caixa}>
          <Pokeapi />
        </View>
      </SafeAreaView>
    )
  }
}
