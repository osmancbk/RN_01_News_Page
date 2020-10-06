import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NewBox from './components/NewBox';

const App = () => {
  return (
    <>
      <ScrollView>
        <Text style={styles.text}>News</Text>
        <View style={styles.container}>
          <NewBox />
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 45,
    fontWeight: '700',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
