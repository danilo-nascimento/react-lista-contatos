import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons' // biblioteca de terceiros
import { Ionicons } from '@expo/vector-icons' // biblioteca de terceiros
import Cores from '../constantes/Cores'
const BotaoAdicionarContato = (props) => {
  return (
    <HeaderButton
      {...props} // Obrigatório. Testei sem e quebrou
      IconComponent={Ionicons}
      iconSize={23}
      color={'#fff'}
      buttonStyle={{
        backgroundColor: Cores.primary,
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
      }}
    />
  )
}

export default BotaoAdicionarContato