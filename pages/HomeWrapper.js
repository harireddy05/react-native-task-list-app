import React from 'react';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function HomeWrapper() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
                title: "Minima List",
                headerStyle: {
                    backgroundColor: "rgb(0, 145, 234)",
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: "bold",
                    color: "white",
                },
                headerLeft: () => (
                    <Ionicons
                        name={'md-menu'}
                        size={24}
                        style={{ marginLeft: 10 }}
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    />
                ),
            })} />
        </Stack.Navigator>
    )
}
