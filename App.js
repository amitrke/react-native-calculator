import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Button from './components/Button';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { intialState, calculator } from './calculator';

export default class App extends React.Component {

  state = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };
  
  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
        <View style={styles.row}>
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="X" />
        </View>
        <View style={styles.row}>
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" />
        </View>
        <View style={styles.row}>
          <Button text="1" onPress={() => this.handleTap("number", 1)} />
          <Button text="2" onPress={() => this.handleTap("number", 2)} />
          <Button text="3" onPress={() => this.handleTap("number", 3)} />
          <Button text="+" />
        </View>
        <View style={styles.row}>
          <Button text="0" />
          <Button text="." />
          <Button text="C" onPress={() => this.handleTap("clear")} />
          <Button text="=" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  value: {
    textAlign: "right",
    color: "white",
    fontSize: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    padding: 8,
  }
});
