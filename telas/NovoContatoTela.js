import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import * as contatosActions from '../store/contatos-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux'

const NovoContatoTela = (props) => {
    const [novoContatoNome, setNovoContatoNome] = useState('')
    const [novoContatoTelefone, setNovoContatoTelefone] = useState('')
    const dispatch = useDispatch()
    const novoContatoNomeAlterado = (texto) => {
        setNovoContatoNome(texto)
    }
    const novoContatoTelefoneAlterado = (novoContatoTelefone) => {
        setNovoContatoTelefone(novoContatoTelefone)
    }

    const novoContatoValido = (novoContatoNome, novoContatoTelefone) => {
        if(novoContatoTelefone === '' || novoContatoNome === '') {
            return false;
        }
    }

    const adicionarContato = () => {
        if (novoContatoValido(novoContatoNome, novoContatoTelefone) === false) {
            alert('Insira os dados para os dois campos');
            return
        }
        const acao = contatosActions.addContato(novoContatoNome, novoContatoTelefone)
        dispatch(acao)
        setNovoContatoNome('')
        setNovoContatoTelefone('')
        props.navigation.goBack()

    }
    return (
        <ScrollView contentContainerStyle={styles.contatoWrap}>
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={'Digite um nome'}
                    onChangeText={novoContatoNomeAlterado} 
                    value={novoContatoNome}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Digite um telefone'}
                    onChangeText={novoContatoTelefoneAlterado}
                    value={novoContatoTelefone}
                />
                <Button 
                    title="OK"
                    color={Cores.primary}
                    onPress={() => adicionarContato()}
                />
            </View>
        </ScrollView>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    contatoWrap: {
        justifyContent: 'center',
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
