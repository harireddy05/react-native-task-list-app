import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Image } from 'react-native';
import HomeWrapper from './pages/HomeWrapper';

import { store } from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import About from './pages/About';

import { DrawerContent } from './components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();
  return (
    <Provider store={store}>
      <NavigationContainer >
        <View style={{ flex: 1 }}>
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            drawerType={dimensions.width >= 768 ? 'slide' : 'front'}
            initialRouteName="Home"
            edgeWidth={200} >
            <Drawer.Screen
              name="HomeScreen"
              component={HomeWrapper}
              options={{
                title: 'Home'
              }} />
            <Drawer.Screen
              name="About"
              component={About} />
          </Drawer.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontStyle: "normal"
  }
});

