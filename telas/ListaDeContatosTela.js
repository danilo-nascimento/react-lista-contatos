import React from 'react'
import { FlatList, StyleSheet, Button, View, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux' 
import ContatoItem from '../componentes/ContatoItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoAdicionarContato from '../componentes/BotaoAdicionarContato'

const ListaDeContatosTela = (props) => {
    
    const contatos = useSelector(estado => estado.contatos.contatos)
    
    return (
        <ScrollView style={styles.viewWrap}>
            <FlatList
                contentContainerStyle={styles.contatosWrap} 
                data={contatos} 
                keyExtractor={contato => contato.id} 
                renderItem={contato => ( 
                    <ContatoItem
                        nome={contato.item.nome} 
                        telefone={contato.item.telefone}
                    />
                )}
            />
            <View style={styles.buttonWrap}>
                <HeaderButtons
                    HeaderButtonComponent={BotaoAdicionarContato}>
                    <Item
                        title="Adicionar"
                        iconName="md-add"
                        onPress={() => {
                            props.navigation.navigate('Novo Contato')
                        }}
                    />
                </HeaderButtons>
            </View>
            
        </ScrollView>
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({
    viewWrap: {
        paddingVertical: 150,
    },
    contatosWrap: {
        justifyContent: 'center', 
        alignSelf: 'center',
    },
    buttonWrap: {
        width: 250,
        margin: 'auto',
        display: 'flex',
        alignItems: 'flex-end'
    }
})
