import React from 'react'
import { Text, View } from 'react-native'
import styles from './estilos'
export default props => (

   //componente reutilizável --------------------
   <>
      <Text style={styles.textao}>
         {props.label}
      </Text>
   </>
)