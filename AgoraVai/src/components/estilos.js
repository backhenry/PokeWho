import { StyleSheet, Dimensions } from 'react-native'

//pacote de estilos para facilitar e deixar o código mais limpo ------------------------

const styles = StyleSheet.create({
   logo: {
      width: 300,
      height: 150,
      resizeMode: 'contain'
   },
   container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#386abb"
   },
   caixa: {
      height: Dimensions.get('window').height / 1.5,
      width: Dimensions.get('window').width - 20,
      backgroundColor: '#7098ee',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      padding: 20
   },
   textao: {
      fontSize: 50,
      fontWeight: "500",
      color: '#ffcc03',
      textAlign: "center",
      textShadowColor: "#585858",
      textShadowOffset: { width: 5, height: 5 },
      textShadowRadius: 10,
   },
   selfieDoPokemon: {
      height: 200,
      width: 200,
      marginTop: 30
   },
   pokecard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botao: {
      marginTop: 20,
      width: 250,
      height: 60,
      backgroundColor: '#00408a',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
   },
   textBtn: {
      color: 'white',
      fontSize: 22,
      fontWeight: "bold",
      fontStyle: "italic"
   },
   textPeq: {
      marginTop: 20,
      color: 'white',
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "italic"
   }
})

export default styles

