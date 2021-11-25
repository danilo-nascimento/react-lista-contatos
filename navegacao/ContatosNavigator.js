import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cores from '../constantes/Cores'
import ListaDeContatosTela from '../telas/ListaDeContatosTela'
import NovoContatoTela from '../telas/NovoContatoTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Lista De Contatos"
            screenOptions={{
                headerStyle:{backgroundColor: Cores.primary},
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen 
                name="Lista De Contatos"
                component={ListaDeContatosTela}
            />
            <Stack.Screen name="Novo Contato" component={NovoContatoTela} />
        </Stack.Navigator>   
    </NavigationContainer>
)

export default container
