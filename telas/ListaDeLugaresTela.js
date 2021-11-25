import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux' // Um hook que retorna a fatia de estado que lhe interessa
import LugarItem from '../componentes/LugarItem'

/**
 * 
 * Pegar a fatia de estado que lhe é interessante e renderizar
 * 
 * @param {*} props 
 * @returns 
 */
const ListaDeLugaresTela = (props) => {

    const lugares = useSelector(estado => estado.lugares.lugares) 
    /**
     * estado.lugares[nome do reducer que não tem sufixo].lugares[nome do pedaço de estado]
     * 
     * A propriedade lugares foi determinada no arquivo App.js na função rootReducer
     * e propriedade lugares seguinte foi definida no estadoInicial do reducer em store/lugares-reducer.js
     */
    return (
        <FlatList 
            data={lugares} // Coleção de lugares
            keyExtractor={lugar => lugar.id} // De onde vem a chave
            renderItem={lugar => ( // Como exibir
                <LugarItem 
                    nomeLugar={lugar.item.titulo} // a propriedade item é nativo
                    imagem={lugar.item.imagemURI}
                    onSelect={() => props.navigation.navigate('DetalhesDoContato', {
                        // DetalhesDoLugar foi definido em LugaresNavigator.js como name do Stack.Screen
                        tituloLugar: lugar.item.titulo, idLugar: lugar.item.id
                    })}
                />
            )}
        />
    )
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})
