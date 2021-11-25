import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoCabecalho from '../componentes/BotaoCabecalho'
import Cores from '../constantes/Cores'
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela'
import ListaDeContatosTela from '../telas/ListaDeContatosTela'
import MapaTela from '../telas/MapaTela'
import NovoContatoTela from '../telas/NovoContatoTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Lista De Contatos"
            screenOptions={{
                headerStyle:{backgroundColor: Cores.primary},
                headerTintColor: 'white'
            }}>
            <Stack.Screen 
                name="Lista De Contatos"
                component={ListaDeContatosTela}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={BotaoCabecalho}>
                            <Item 
                               title="Adicionar"
                               iconName="md-add"
                               onPress={() => {
                                    props.navigation.navigate('Novo Contato')
                               }} 
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen name="Novo Contato" component={NovoContatoTela} />
        </Stack.Navigator>   
    </NavigationContainer>
)

export default container
