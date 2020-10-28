import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>{/* Rest of your app code */}
      <View style={{ flex: 1 }}>        
        <Stack.Navigator>
          <Stack.Screen name="The Templist" component={Home} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 30
  }
});

