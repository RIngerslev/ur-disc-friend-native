import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef, useState } from 'react';

export default function TabTwoScreen() {
  const [name,setName] = useState('Put')

  const clickMe = () => {
    TurnIn()
    setName(makeid)
  }
  
  
  function makeid() {
    var word = ['Put','Not'];
    var words = word[Math.floor(Math.random()*word.length)];
    return words;
  }
  
  const turnAnim = useRef(new Animated.Value(0)).current;
  let currentValue = 0
  
  turnAnim.addListener(({value}) => {
    currentValue = value
  })
  
  const setInterpolate = turnAnim.interpolate({
    inputRange: [0, 720],
    outputRange: ['0deg', '720deg']
  })
  
  const rotateYAnimatedStyle = {
    transform: [{ rotateY: setInterpolate}]
  }
  
  const TurnIn = () => {
    turnAnim.setValue(0)
    Animated.spring(turnAnim, {
      toValue: 720,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Put or Not!</Text>
      <Text style={styles.simpel}>Should you approach?</Text>
      
      <View style={styles.imageStyle}>
            {name === 'Put' ? <Animated.Image
      style={[rotateYAnimatedStyle, styles.imageStyle2]}
      source={require('../../assets/images/put.png')}
      />: <Animated.Image
      style={[rotateYAnimatedStyle, styles.imageStyle2]}
      source={require('../../assets/images/not.png')}
      /> }
      </View>
      
      <TouchableOpacity
				onPress={clickMe}>
				<View style={styles.buttonContainer}>
				<Text style={styles.buttonText}> Roll </Text>
        </View>
			</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9E9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 20,
    color: "#EEF5DB",
    fontWeight: "bold",
    backgroundColor: "#4f6367",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },

  textStyle1: {
    margin: 30,
    height: 220,
    width: 220,
    backgroundColor: "#EEF5DB",
    color: "#4f6367",
    padding: 80,
    borderRadius: 110,
    fontSize: 25,
    textAlign: 'center',
    overflow: 'hidden', 
  },

  imageStyle: {
    margin: 15,
    backgroundColor: 'transparent'
  },

  imageStyle2: {
    borderRadius: 6,
    resizeMode: 'contain',
    height: 250, 
    width: 250
  },

  Button:{
    fontSize: 30,
    fontWeight: "bold",
    margin: 100,
    backgroundColor: '#7A9E9F',
  },

	buttonContainer: {
		marginVertical: 10,
		height: 60,
		marginHorizontal: 10,
		backgroundColor: '#FE5F55',
		justifyContent: 'center',
		alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,  
	},

	buttonText: {
		color: '#fff',
		fontSize: 40,
	},

  buttonInfo: {
		marginVertical: 20,
		height: 35,
		marginHorizontal: 10,
		backgroundColor: '#4f6367',
		justifyContent: 'center',
		alignItems: 'center',
    borderRadius: 10,
	},

	buttonTextInfo: {
		color: '#EEF5DB',
		fontSize: 20,
	},

  simpel: {
    color: 'black'
  },
});
