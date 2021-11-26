import React from 'react';
import {
    StyleSheet,
    Text,
    View 
} from 'react-native'

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
        alignItems: 'center', 
        
    },
    infoContainer: {
        width: 250,
        paddingVertical: 15, 
        paddingHorizontal: 15, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1, 
        marginBottom: 5,
        borderRadius: 7,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
    },
})

export default ContatoItem