import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import * as contatosActions from '../store/contatos-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux' // Um hook que substitui Opera exatamente como o store.dispatch.

const NovoContatoTela = (props) => {
    const [novoContatoNome, setNovoContatoNome] = useState('')
    const [novoContatoTelefone, setNovoContatoTelefone] = useState('')
    const dispatch = useDispatch() // Ação necessária para uso do dispatch
    const novoContatoNomeAlterado = (texto) => {
        setNovoContatoNome(texto)
    }
    const novoContatoEnderecoAlterado = (novoContatoTelefone) => {
        setNovoContatoTelefone(novoContatoTelefone)
    }

    const adicionarContato = () => {
        const acao = contatosActions.addContato(novoContatoNome, novoContatoTelefone)
        dispatch(acao)
        setNovoContatoNome('')
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
