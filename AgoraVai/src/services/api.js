import axios from 'axios'
//chamando a baseURL para poder fazer consultas
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default api