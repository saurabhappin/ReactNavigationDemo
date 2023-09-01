import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Screen1({navigation}) {
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>Your Contacts!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style={styles.button}>
        <Text>Go to Screen 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    letterSpacing: 0.64,
    fontSize: 28,
    textAlign: 'center',
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: '30%',
    marginVertical: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
