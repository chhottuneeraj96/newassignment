import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'



//var SliderButton = require("react-native-slider-button");
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{color :'yellow',fontSize:20}}>4 Variations of button</Text>
      <View >
      <Button 
        title="Press me"
        onPress={() => navigation.navigate('Profile')} 
      />
      </View>
      
      <View style={styles.secondButtonContainer}>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('Screen2')}
      />
      </View>
      
      <View  style={styles.firstButtonContainer}>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('Screen3')}
      />
      </View>
      
      <View>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('Screen4')}
      />
      </View>
      {/* <SliderButton text={"Slide to start!"}
      onTrigger= {()=>navigation.navigate('Screen3')}
      /> */}

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: 'black'
  },
  firstButtonContainer: {
    elevation: 8,
    marginTop:20,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100
  },
  secondButtonContainer: {
    elevation: 8,
    marginTop:10,
    backgroundColor: "grey",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100
  },
})
export default HomeScreen;
