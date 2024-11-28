import { Text, View, Image, StyleSheet, Platform } from 'react-native';


export default function HomeScreen() {
  return (
    <View
    style={styles.container}
>
    <h1 style={styles.h1}> Today's Weather </h1>
    <text style={styles.text}> City Name </text>
    </View> 
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },

  text:{
    color: "darkblue", 
    fontFamily: "helvetica"
  },

  h1: {
    fontSize: 24,
    color: "darkblue", 
    fontFamily: "helvetica"
  }
})