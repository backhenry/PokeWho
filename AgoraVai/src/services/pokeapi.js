import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import api from './api'
import TextoGrande from '../components/TextoGrande'
import estilo from '../components/estilos'
  
class Pokeapi extends Component {
   
   //gera um número de pokemós aletarório
   pokenumram = Math.floor(Math.random() * 864)
   
   //criando o estado para poder monitorar as responses, salvando os resultados delas
   state = {
      pokemons: [],
   }

   //utilizando o método componentDidMount para iniciar a api mais rapidamente
   async componentDidMount() {
      const response = await api.get(''+ this.pokenumram)
      this.setState({ pokemons: response.data })
   }
   
   render() {
      //utilizando de destruction para obter o arquivo Json de dentro do state
      const { pokemons } = this.state
      const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + this.pokenumram + '.png'
      return (
         //retornando as Views
         <View style={estilo.pokecard}>
            <TextoGrande label= {pokemons.name}/>
            <Image style={estilo.selfieDoPokemon} source={{ uri: imageUrl }} />
         </View>
      )
   }
}

export default Pokeapi