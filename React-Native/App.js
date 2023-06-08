//This is an example of online Emulator by https://aboutreact.com
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';

const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.addSkillsContainer}>
      <Text style={styles.addSkillsText}>Add Skills</Text>
       </View>
      <SearchBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addSkillsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#f0f0f0',
  },
  addSkillsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  otherComponentsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
