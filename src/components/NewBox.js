import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const NewBox = () => {
  return (

    <View style={styles.container}>
        
      <View style={styles.innerBox }>
        <Image
         style={styles.img}
          source={require('../image/chart.jpg')} />
        <Text style={styles.textMain}>Bitcoin To Hit $100,000 in Five Years as Demand and Adoption Increase - Report</Text>
        <Text style={styles.text}>So, doubling that time frame for maturation could get the price toward $100,000 in about five more years,” he said, in Bloomberg’s Crypto Outlook report for October</Text>
      </View>

      <View style={styles.innerBox}>
        <Image
         style={styles.img}
          source={require('../image/green.jpg')} />
        <Text style={styles.textMain}>Mars claims its palm oil is deforestation-free after ditching hundreds of suppliers</Text>
        <Text style={styles.text}>But confectionery giant warns businesses need to work together to fix 'broken' palm oil supply chains that further...</Text>
      </View>

      <View style={styles.innerBox}>
        <Image
         style={styles.img}
          source={require('../image/news.jpg')} />
        <Text style={styles.textMain}>Americans Increasingly Believe Violence is Justified if the Other Side Wins</Text>
        <Text style={styles.text}>At the presidential debate this week, the Republican candidate voiced his concern about political violence—left-wing political violence.</Text>
      </View>

    </View>
  );
};

export default NewBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',

  },

  innerBox: {
    margin: 10,
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius:10,
  },

  img: {
    width: 'auto',
    height: 250,
    borderRadius:10,
    margin: 10,
  },
  textMain: {
      margin:5,
      fontSize:17,
      fontWeight: 'bold',
      marginLeft: 10,
  },
  text: {
    margin:5,
    fontSize:16,
    marginLeft: 10,
}

});
