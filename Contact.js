import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Contact = () => {
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@contacts');
      console.log('jsonValue', JSON.parse(jsonValue));
      setContactsData(JSON.parse(jsonValue));
    } catch (e) {
      console.log(e);
    }
  };

  const firstLetters = name => {
    var string = name;
    string = string.split(' ');
    console.log('STRRR', string);
    if (string.length === 0) {
      return '**';
    } else if (string.length === 1) {
      return string[0].charAt(0);
    } else {
      return string[0].charAt(0) + string[1].charAt(0);
    }
  };

  const renderItemComponent = item => {
    return (
      <View style={styles.contactCard}>
        <View style={styles.circleContainer}>
          <Text style={styles.firstLetters}>
            {firstLetters(item.item.name)}
          </Text>
        </View>
        <View style={styles.contactInfo}>
          <Text numberOfLines={1} style={styles.contactName}>
            {item.item.name}
          </Text>
          <Text numberOfLines={1}> {item.item.phoneNumber}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text
          style={{marginLeft: 5, margin: 5, fontWeight: 'bold', fontSize: 20}}>
          {'Team Members'}
        </Text>
      </View>
      <FlatList
        // style={styles.flatlistContainer}
        data={contactsData}
        renderItem={item => renderItemComponent(item)}
        //   keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{'Add Members'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  contactCard: {
    // backgroundColor: 'lightblue',
    flex: 1,
    height: 110,
    marginVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderColor: '#f08080',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#f08080',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.8,
  },
  circleContainer: {
    display: 'flex',
    alignSelf: 'center',
    marginLeft: 5,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: '#e4717a',
    borderWidth: 1,
  },
  contactInfo: {
    display: 'flex',
    width: '70%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  contactName: {
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 3,
    // backgroundColor:"red",
  },
  buttonContainer: {
    height: 40,
    margin: 30,
    backgroundColor: '#880808',
    borderRadius: 40,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 8,
    color: 'white',
  },
  firstLetters: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 30,
  },
});

export default Contact;
