import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  },
  button: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth)
  }
});