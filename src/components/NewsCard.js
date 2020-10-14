import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const NewsCard = ({ news }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: news.imageUrl }}
        style={styles.image}
      />

      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>


    </View>


  );
};

export { NewsCard };

const styles = StyleSheet.create({
  container: {
    flex:1, //anasayfadan flex.i kaldırdık öyle 2 sütun oldu
    // width: Dimensions.get('window').width * 0,45 //Geçici çözüm
    borderWidth: 1,
    borderColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 5

},
title: {
    fontWeight: 'bold',
    
},
description: {
 marginLeft:1,
},
image: {
    height: Dimensions.get('window').height * 0.30,
    borderRadius: 5,
    
}
})