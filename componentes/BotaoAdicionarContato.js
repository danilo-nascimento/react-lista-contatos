import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Cores from '../constantes/Cores'
const BotaoAdicionarContato = (props) => {
  return (
    <HeaderButton
      {...props}
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