import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/Config'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/GlobalStyles'



export default function LeerTarea() {

    const [tareas, setTareas] = useState<Tarea[]>([])
    const [tarea, setTarea] = useState<any>(null)
    const [id, setId] = useState(0)

    type Tarea = {
        id: string
        titulo: string
        descripcion: string
    }

    useEffect(() => {
        leerTareas()
    }, [])

    async function leerTareas() {

        const querySnapshot = await getDocs(collection(db, "tareas"))
        const listaTareas: Tarea[] = []
        querySnapshot.forEach((doc) => {

            const datos = doc.data()

            listaTareas.push({
                id: doc.id,
                titulo: datos.titulo,
                descripcion: datos.descripcion
            })
        })

        setTareas(listaTareas)
    }


    async function leerTarea() {

        const docRef = doc(db, "tareas", id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTarea({
                id: docSnap.id,
                ...docSnap.data()
            })
        } else {
            setTarea(null)
            Alert.alert("Error", "No existe una tarea con ese ID")
        }

    }

    return (
        <View>
            <Text>Leer Tarea</Text>
            <Text>Ingresar ID de Tarea</Text>

            <TextInput
            placeholder='Ingresar ID de la tarea'
                style={globalStyles.input}
                onChangeText={(texto) => setId(+texto)}/>

            <Button
            title='ID'
            onPress={leerTarea}/>

                {tarea == null
                ? <ActivityIndicator />
                : <View> <Text style={{ fontSize: 25 }}>Titulo: {tarea.titulo}</Text>
                <Text style={{ fontSize: 25 }}>Descripción: {tarea.descripcion}</Text>
                </View>
            }


            <Text>Lista de Tareas:</Text>

            <FlatList
                data={tareas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ fontSize: 20 }}>ID: {item.id}</Text>
                        <Text style={{ fontSize: 20 }}>Título: {item.titulo}</Text>
                        <Text style={{ fontSize: 20 }}>Descripción: {item.descripcion}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})