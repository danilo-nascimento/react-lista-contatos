/**
 * É aqui aonde são adicionados novos dados ao estado no Redux
 */
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import * as contatosActions from '../store/contatos-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux' // Um hook que substitui Opera exatamente como o store.dispatch.

const NovoContatoTela = (props) => { // Componente
    const [novoContatoNome, setNovoContatoNome] = useState('') // Estados locais. Não estão no Redux - useState
    const [novoContatoTelefone, setNovoContatoTelefone] = useState('')// Estados locais. Não estão no Redux - useState
    // São utilizados estados locais inicialmente por causa do princípio do menor privilégio.

    const dispatch = useDispatch() // Ação necessária para uso do dispatch
    const novoContatoNomeAlterado = (texto) => { // função que vai alterando o valor do estado local
        setNovoContatoNome(texto)
    }
    const novoContatoEnderecoAlterado = (novoContatoTelefone) => {
        setNovoContatoTelefone(novoContatoTelefone)
    }

    const novoContatoValido = (novoContatoNome, novoContatoTelefone) => {
        if(novoContatoTelefone === '' || novoContatoNome === '') {
            return false;
        }
    }

    const adicionarContato = () => {
        if (novoContatoValido(novoContatoNome, novoContatoTelefone) === false) { // isto é opcional.
            alert('Insira os dados para os dois campos');
            return
        }
        const acao = contatosActions.addContato(novoContatoNome, novoContatoTelefone)
        dispatch(acao) // Executa a ação via reducer
        setNovoContatoNome('') // Zera o nome do contato
        setNovoContatoTelefone('') // Precisa adicionar
        props.navigation.goBack()

    }
    return (
        <ScrollView contentContainerStyle={styles.contatoWrap}>
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={'Digite um nome'}
                    onChangeText={novoContatoNomeAlterado} /* Seguindo o princípio do menor privilégio, enquanto o texto é digitado apenas o estado é atualizado. Somente ao salvar será enviado ao estado centralizado. Manter como estado local é suficiente */
                    value={novoContatoNome}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Digite um telefone'}
                    onChangeText={novoContatoEnderecoAlterado} /* Seguindo o princípio do menor privilégio, enquanto o texto é digitado apenas o estado é atualizado. Somente ao salvar será enviado ao estado centralizado. Manter como estado local é suficiente */
                    value={novoContatoTelefone}
                />
                <Button 
                    title="OK"
                    color={Cores.primary} // Define a cor do botão
                    onPress={() => adicionarContato()}
                />
            </View>
        </ScrollView>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    contatoWrap: {
        justifyContent: 'center', // Centralizando ao centro
    },
    form: {
        marginTop: 50,
        margin: 'auto',
        width: 250,
    },
    textInput: {
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 12,
        paddingVertical: 8,
        textAlign: 'center',
        borderRadius: 7
    }
})
