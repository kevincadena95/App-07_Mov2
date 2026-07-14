import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Config';


export default function LeerTarea() {

    const [tareas, setTareas] = useState([])
    const [id, setId] = useState(0)
    const [tarea, setTarea] = useState()

    useEffect(() => {
        leerTareas()
    }, [])
    

    async function leerTareas() {

        const querySnapshot = await getDocs(collection(db, "tareas"));
        querySnapshot.forEach((doc) => {
            
        });
    }




    return (
        <View>
            <Text>Leer Tarea</Text>

            <Text>Lista de Tareas:</Text>
            <FlatList 
            data={tareas}
            renderItem={({item}: {item: any})=>(
                <View>
                    <Text style={{ fontSize: 20 }}>{item.id}</Text>
                    <Text style={{ fontSize: 20 }}>{item.titulo}</Text>
                    <Text style={{ fontSize: 20 }}>{item.descripcion}</Text>
                </View>
            )
        }
            />

        </View>
    )
}

const styles = StyleSheet.create({})