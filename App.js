import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Home from './pages/Home';

export default function App() {

  return (
    <View >
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
