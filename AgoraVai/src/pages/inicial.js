import React, { Component } from 'react'
import { Text, Image, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../components/estilos'
import { TouchableHighlight } from 'react-native-gesture-handler'
export default class Inicial extends Component {

   //renderizando a tela inicial, chamando os estilos necessários 
   //colocando o botão para iniciar o jogo
   //onPress para poder ir para proxima tela
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/pokewho.png')} />
            <View style={styles.caixa}>
               <Image style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'contain'
               }} source={require('../assets/pikachu.png')} />
               <Text style={styles.textPeq}>" As circunstâncias do nascimento de alguém são irrelevantes.
É o que você faz com o dom da vida que determina quem você é... " -Mewtwo</Text>
               <TouchableHighlight style={styles.botao} onPress={()=>{
                  this.props.navigation.navigate('Main')
               }}>
                  <Text style={styles.textBtn}>Começar</Text>
               </TouchableHighlight>
            </View>
         </SafeAreaView>
      )
   }
}
