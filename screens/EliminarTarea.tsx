import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../Firebase/Config'
import { deleteDoc, doc } from 'firebase/firestore'
import { globalStyles } from '../styles/GlobalStyles'

export default function EliminarTarea() {

   function eliminarTarea() {
        Alert.alert('Peligro',"Deseas Borrar?", [
            {
                text:"Borrar",
                onPress:async ()=> await deleteDoc(doc(db, "tareas", idTarea))
            },
            {
                text:"Cancelar"
            }
        ])
        
    }

    const [idTarea, setIdTarea] = useState("")

    return (
        <View>
            <Text>EliminarScreen</Text>
            <TextInput placeholder='Ingresar el ID de la tarea a eliminar'
                style={globalStyles.input}
                onChangeText={setIdTarea} />

            <Button
                onPress={eliminarTarea}
                title='Eliminar'
                color={"red"} />

        </View>
    )
}

const styles = StyleSheet.create({})