import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/GlobalStyles'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../Firebase/Config';



export default function GuardarTarea() {

    const [id, setId] = useState(0)
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    function guardarTarea() {

        setDoc(doc(db, "tareas", id.toString() ), {
            titulo: titulo,
            descripcion: descripcion,
            
        });
    }


    return (
        <View>
            <Text>Guardar Tarea</Text>

            <TextInput placeholder='Ingresa ID de la tarea'
                style={globalStyles.input}
                onChangeText={(texto) => setId(+texto)}
                value={id.toString()} />

            <TextInput placeholder='Ingresa el Titulo de la tarea'
                style={globalStyles.input}
                onChangeText={(texto) => setTitulo(texto)}
                value={titulo} />

            <TextInput placeholder='Ingresa la Descripción de la tarea'
                style={globalStyles.input}
                onChangeText={(texto) => setDescripcion(texto)}
                value={descripcion} />

                <Button title='Guardar' 
                color="green"
                onPress={()=> guardarTarea()}/>
        </View>
    )
}

const styles = StyleSheet.create({})