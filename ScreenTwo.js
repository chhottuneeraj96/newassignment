import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

const ScreenTwo = () => {
  const state = useSelector(state => state)
  const [nameData, setName] = React.useState(state?.stateData)

  React.useEffect(() => {
    console.log("STATE CHECK", state)
  })
  return (
    <Text>
      Hi, Welcome {nameData}
    </Text>

  );
};

export default ScreenTwo;