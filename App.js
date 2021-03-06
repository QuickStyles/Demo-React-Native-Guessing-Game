import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [correctNumber, setCorrectNumber] = useState(7);
  const [guess, setGuess] = useState(null);
  const [guessInput, setGuessInput] = useState('');
  const [hasWon, setHasWon] = useState(false);
  const [guessMessage, setGuessMessage] = useState('');
  const [guessCount, setGuessCount] = useState(0);

  function handleButtonClick() {
    setGuessCount(guessCount + 1);
    if (correctNumber === parseInt(guessInput)) {
      setHasWon(true);
    } else {
      if (guessInput > correctNumber) {
        setGuessMessage('Too high!')
      } else {
        setGuessMessage('Too low!')
      }
    }
    setGuess(guessInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        {
          hasWon ? <Text>You're the winner! It took {guessCount} tries</Text>
          :
          <Text>{guessMessage}</Text>
        }
      </View>
      <View style={styles.bottomBox}>
        <Text>Your last guess was: {guess}</Text>
        <Text>Enter your guess below:</Text>
        <TextInput 
          style={styles.guessInput}
          value={guessInput}
          onChangeText={(text) => setGuessInput(text)}
        >
        </TextInput>
        <Button title='Try' onPress={handleButtonClick}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topBox: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBox: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  guessInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    backgroundColor: 'white'
  }
});
