import React from 'react'
import { FlatList, StyleSheet, Button, View, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux' // Um hook que retorna a fatia de estado que lhe interessa
import ContatoItem from '../componentes/ContatoItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoAdicionarContato from '../componentes/BotaoAdicionarContato'
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
        <ScrollView style={styles.viewWrap}> {/** Responsável por garantir a barra de rolagem. Não seria necessário caso não tive risco de rolagem */}
            <FlatList
                contentContainerStyle={styles.contatosWrap} // Estilo do Container
                data={contatos} // Coleção de contatos (que estão no Redux)
                keyExtractor={contato => contato.id} // De onde vem a chave (que deve ser única)
                renderItem={contato => ( // Para cada item contato ele passa os dados para o componente
                    <ContatoItem // Passa os dados via props. 
                        nome={contato.item.nome} // a propriedade item é nativo. E é lido pelo componente ContatoItem como props.nome
                        telefone={contato.item.telefone}
                    />
                )}
            />
            <View style={styles.buttonWrap}> {/**Tem como finalidade servir de referência para o botão alinhar a direita*/}
                <HeaderButtons // Talvez pudesse ser outro componente. mas foi o que conseguimos usar partindo do projeto exemplo
                    HeaderButtonComponent={BotaoAdicionarContato}> {/**Define qual o componente a ser renderizado */}
                    <Item
                        title="Adicionar"
                        iconName="md-add"
                        onPress={() => { // Ao ser clicado é disparada a função
                            props.navigation.navigate('Novo Contato') // Mesmo nome definido em ContatosNavigator
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
