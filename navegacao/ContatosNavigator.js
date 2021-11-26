/**
 * Responsável pela definição das páginas e os componentes responsáveis pelas renderização
 */
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cores from '../constantes/Cores'
import ListaDeContatosTela from '../telas/ListaDeContatosTela' // componente
import NovoContatoTela from '../telas/NovoContatoTela' // componente

const Stack = createNativeStackNavigator() // "Retorna o componente que gera a "Pilha" de telas. Isso por conta da navegação

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Lista De Contatos" // Define qual é a primeira página
            screenOptions={{ // opções de estilo. neste caso é necessário usar screenOptions. os nomes das propriedades tb são definidos pelo componente
                headerStyle:{backgroundColor: Cores.primary},
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen // Responsável por uma tela. Vai renderizar a tela definida em component
                name="Lista De Contatos" // O texto que aparece no topo
                component={ListaDeContatosTela} // Irá renderizar o componente ListaDeContatosTela que contém mais um componente
            />
            <Stack.Screen name="Novo Contato" component={NovoContatoTela} />
        </Stack.Navigator>   
    </NavigationContainer>
)

export default container
