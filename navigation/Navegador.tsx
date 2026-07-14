import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GuardarTarea from '../screens/GuardarTarea';
import EliminarTarea from '../screens/EliminarTarea';
import EditarTarea from '../screens/EditarTarea';
import LeerTarea from '../screens/LeerTarea';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="GuardarTarea" component={GuardarTarea} />
            <Drawer.Screen name="LeerTarea" component={LeerTarea} />
            <Drawer.Screen name="EliminarTarea" component={EliminarTarea} />
            <Drawer.Screen name="EditarTarea" component={EditarTarea} />
            

        </Drawer.Navigator>
    );
}

export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}