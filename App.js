import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  
  const [defaultRating, setdefaultRaiting] = useState(2);
  const [maxRaiting, setmaxRaiting] = useState([1,2,3,4,5]);
  
  
  const starImgFilled  = require('./assets/star_filled.png');
  const startImgCorner  = require('./assets/star_corner.png');

  const CustomRatingBar = ()=>{
    return(
      <View style={styles.customRatingBarStyle}>
        {
          maxRaiting.map((item, key)=>{
            return(
              <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={()=> setdefaultRaiting(item)}>

              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                  ? starImgFilled
                  : startImgCorner
                }
              />

              </TouchableOpacity>
            );

          })
        }
      </View>

    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Calificar!</Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + ' / ' + maxRaiting.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={()=>alert(defaultRating)}
      >
        <Text>Obtener valor</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle:{
    textAlign:'center',
    fontSize:23,
    marginTop:20

  },
  customRatingBarStyle:{
    justifyContent:'center',
    flexDirection: 'row',
    marginTop:30
  },
  starImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover'
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    padding:15,
    backgroundColor:'green'
  }
});
