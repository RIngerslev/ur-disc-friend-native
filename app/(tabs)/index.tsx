import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function HomeScreen() {
  const [name,setName] = useState("Forhand")
  const [name2,setName2] = useState("Hyzer")

  const clickMe = () => {
    fadeIn3()
    fadeIn2()
    fadeIn()
    setName(makeid3)
    setName(makeid)
    setName2(makeid2)
  }

  function makeid() {
    var word = ['Forhand','Backhand','Roller','Hyzer','Anhyzer','Wild'];
    var words = word[Math.floor(Math.random()*word.length)];
    return words;
  }

  function makeid2() {
    var word = ['Putter','Mid','Driver','Understable','Overstable','Wild'];
    var words = word[Math.floor(Math.random()*word.length)];
    return words;
  }

  function makeid3() {
    var word = ['?'];
    var words = word[Math.floor(Math.random()*word.length)];
    return words;
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    fadeAnim.setValue(0)
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start();
  };

  const fadeAnim2 = useRef(new Animated.ValueXY({x:10,y:10})).current;

  const fadeIn2 = () => {
    fadeAnim2.setValue({x:10,y:10})
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim2, {
      toValue: { x:0,y:0 },
      speed: 20,
      bounciness: 30,
      useNativeDriver: false
    }).start();
  };

  const fadeAnim3 = useRef(new Animated.ValueXY({x:-10,y:-10})).current;

  const fadeIn3 = () => {
    fadeAnim3.setValue({x:-10,y:-10})
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim3, {
      toValue: { x:0,y:0 },
      speed: 20,
      bounciness: 30,
      useNativeDriver: false
    }).start();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Ur Disc Friend!</Text>
      <Text>By Rasmus Ingerslev</Text>
      
      <Animated.View style={[{transform: [{translateX:fadeAnim2.x},{translateY:fadeAnim2.y}], opacity: fadeAnim}]}>
        <Text style={styles.textStyle1}>{name}</Text>
      </Animated.View>
      
      <Animated.View style={[{transform: [{translateX:fadeAnim3.x},{translateY:fadeAnim3.y}], opacity: fadeAnim}]}>
        <Text style={styles.textStyle1}>{name2}</Text>
      </Animated.View>

      <TouchableOpacity activeOpacity={0.15} onPress={clickMe}>  
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

  shadowOffSet: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 2,
  },

  textStyle1: {
    margin: 30,
    height: 80,
    width: 220,
    backgroundColor: "#EEF5DB",
    color: "#4f6367",
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
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

  buttonFlip: {
		marginVertical: 20,
		height: 35,
		marginHorizontal: 10,
		backgroundColor: '#4f6367',
		justifyContent: 'center',
		alignItems: 'center',
    borderRadius: 10,
	},

	buttonTextFlip: {
		color: '#EEF5DB',
		fontSize: 20,
  }
});