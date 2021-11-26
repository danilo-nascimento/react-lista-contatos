/**
 * Componente que engloba dados do contato
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View // Agrupamento de elementos (como o div do HTML)
} from 'react-native'

const ContatoItem = (props) => {
    
    return ( // isto é  um JSX
        <View // serve como agrupamento. no caso de versão web é como uma div
            style={styles.contatoItem}> {/** define qual propriedade e seu estilo */}

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

const styles = StyleSheet.create({ // Responsavel pelo estilo (css)
    // Quase todos os componentes são display flex
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
        fontSize: 16,
    },
})

export default ContatoItem