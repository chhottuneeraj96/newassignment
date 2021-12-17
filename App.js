import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MyStack from './MyStack';
import stateReducer from './reducer'

const App = () => {
  const store = createStore(stateReducer);
  return (


    <Provider store={store}>
      <View style={styles.container}>
        <MyStack />
      </View>
    </Provider>



  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default App;