import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux' // Um hook que retorna a fatia de estado que lhe interessa
import ContatoItem from '../componentes/ContatoItem'

/**
 * 
 * Pegar a fatia de estado que lhe é interessante e renderizar
 * 
 * @param {*} props 
 * @returns 
 */
const ListaDeContatosTela = (props) => {

    const contatos = useSelector(estado => estado.contatos.contatos)
    /**
     * estado.contatos[nome do reducer que não tem sufixo].contatos[nome do pedaço de estado]
     * 
     * A propriedade contatos foi determinada no arquivo App.js na função rootReducer
     * e propriedade contatos seguinte foi definida no estadoInicial do reducer em store/contatos-reducer.js
     */
    return (
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
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({
    contatosWrap: {
        justifyContent: 'center', // Centralizando ao centro
        height: '100%' // Definindo altura como 100% possibilitando o efeito de centralização
    }
})
