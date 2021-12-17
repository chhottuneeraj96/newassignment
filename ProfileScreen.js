import * as React from 'react';
import { StyleSheet, View, Text,TextInput } from 'react-native'
import { useDispatch } from 'react-redux';


const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("")

  return (
    <View>
      <Text>
        Enter the text you want to see in all the oter screens
      </Text>
      <TextInput style={styles.input}
        onChangeText={
          (e) => {
            dispatch({ type: 'CHANGE', payload: e });
          }}
          placeholder="Enter name">

      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomColor:'blue',
    padding: 10,
  },
});

export default ProfileScreen;