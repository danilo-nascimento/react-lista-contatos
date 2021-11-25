import React from 'react';
import {
    StyleSheet,
    Text,
    View // Agrupamento de elementos (como o div do HTML)
} from 'react-native'
import Cores from '../constantes/Cores'

const ContatoItem = (props) => {
    
    return (
        <View
            style={styles.contatoItem}>

            <View
                style={styles.infoContainer} >
                <Text
                    style={styles.text}>{props.nome}</Text>
                <Text
                    style={styles.text}>{props.telefone}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contatoItem: {
        borderBottomColor: '#CCC',
        alignItems: 'center', // Determina que os itens estão alinhados no centro
        
    },
    infoContainer: {
        width: 250,
        paddingVertical: 15, // espaço vertical entre a borda e o conteúdo Image e View
        paddingHorizontal: 15, // espaço horizontal entre a borda e o conteúdo Image e View
        justifyContent: 'center', // Operando na vertical já que não foi definido o flexDirection com row
        alignItems: 'center',
        borderWidth: 1, // Sem essa declaração a borda não aparece
        marginBottom: 5,
        borderRadius: 7,
        textAlign: 'center'
    },
    text: {
        color: '#777',
        fontSize: 16,
        marginBottom: 5
    },
})

export default ContatoItem