import React, {useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from './Contact.js';

const App = () => {
  const CONTACT_LIST = [
    {name: 'Anna Grace', phoneNumber: 99999999991},
    {name: 'Bettie Bee', phoneNumber: 99999999992},
    {name: 'Carol Kaye', phoneNumber: 99999999993},
    {name: 'Emma Grace', phoneNumber: 99999999994},
    {name: 'Emma Dale', phoneNumber: 99999999995},
    {name: 'Mary Jewel', phoneNumber: 99999999996},
    {name: 'Frances', phoneNumber: 99999999997},
    {name: 'Tressa Gail', phoneNumber: 99999999998},
    {name: 'Jack David', phoneNumber: 99999999990},
    {name: 'Andrew', phoneNumber: 99999999912},
    {name: 'John Mark', phoneNumber: 99999999923},
    {name: 'John Preston', phoneNumber: 99999999934},
    {name: 'John Mark', phoneNumber: 99999999945},
    {name: 'Charlie Clyde', phoneNumber: 99999999956},
    {name: 'Don Michael', phoneNumber: 99999999967},
    {name: 'Eddie Wayne', phoneNumber: 99999999978},
    {name: 'Terry Mack', phoneNumber: 89999999990},
    {name: 'Ford Allen', phoneNumber: 99999999123},
    {name: 'Frank Finn', phoneNumber: 99999999234},
    {name: 'Zack Alan', phoneNumber: 99999999456},
  ];

  useEffect(() => {
    const jsonValue = JSON.stringify(CONTACT_LIST)
    AsyncStorage.setItem('@contacts', jsonValue)
  },[])
  

  return (
    <SafeAreaView>
      <View>
        <Contact />
      </View>
    </SafeAreaView>
  );
};

export default App;
