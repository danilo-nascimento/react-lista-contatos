import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity, // Tornar o elemento tocável e viabilizar a navegação para exibir os detalhes
    View // Agrupamento de elementos (como o div do HTML)
} from 'react-native'
import Cores from '../constantes/Cores'

const LugarItem = (props) => {
    return (
        <TouchableOpacity // Ao tocar fica com opacidade
            onPress={props.onSelect} // Dispara a função onSelect ao ser tocado. Essa função é passada via props
            style={styles.lugarItem}>

            <Image 
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View
                style={styles.infoContainer}>
                <Text
                    style={styles.nomeLugar}>{props.nomeLugar}</Text>
                <Text
                    style={styles.endereco}>{props.endereco}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lugarItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1, // Sem essa declaração a borda não aparece
        paddingVertical: 15, // espaço vertical entre a borda e o conteúdo Image e View
        paddingHorizontal: 30, // espaço horizontal entre a borda e o conteúdo Image e View
        flexDirection: 'row', // Determina que os itens estão em linha. Por padrão renderiza como coluna
        alignItems: 'center', // Determina que os itens estão alinhados no centro
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35, // Arredondar a borda. Nesta definição chega a se tornar um círculo
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center', // Operando na vertical já que não foi definido o flexDirection com row
        alignItems: 'flex-start'
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    endereco: {
        color: '#777',
        fontSize: 16,
    }
})

export default LugarItem