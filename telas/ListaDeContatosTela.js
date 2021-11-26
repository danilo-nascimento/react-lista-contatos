import React from 'react'
import { FlatList, StyleSheet, Button, View, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux' // Um hook que retorna a fatia de estado que lhe interessa
import ContatoItem from '../componentes/ContatoItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoCabecalho from '../componentes/BotaoCabecalho'
/**
 * 
 * Pegar a fatia de estado que lhe é interessante e renderizar
 * 
 */
const ListaDeContatosTela = (props) => {
    //@ts-ignore
    const contatos = useSelector(estado => estado.contatos.contatos)
    /**
     * estado.contatos[nome do reducer que não tem sufixo].contatos[nome do pedaço de estado]
     * 
     * A propriedade contatos foi determinada no arquivo App.js na função rootReducer
     * e propriedade contatos seguinte foi definida no estadoInicial do reducer em store/contatos-reducer.js
     */
    return (
        <ScrollView style={styles.viewWrap}>
            <FlatList
                contentContainerStyle={styles.contatosWrap} // Estilo do Container
                data={contatos} // Coleção de contatos
                keyExtractor={contato => contato.id} // De onde vem a chave
                renderItem={contato => ( // Como exibir
                    <ContatoItem
                        nome={contato.item.nome} // a propriedade item é nativo
                        telefone={contato.item.telefone}
                    />
                )}
            />
            <View style={styles.buttonWrap}> {/**Tem como finalidade servir de referência para o botão alinhar a direita*/}
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
        justifyContent: 'center', // Centralizando ao centro
        alignSelf: 'center',
    },
    buttonWrap: {
        width: 250,
        margin: 'auto',
        display: 'flex',
        alignItems: 'flex-end'
    }
})
