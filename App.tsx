import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "./Button"

export default function App() {
  return (
      <Button></Button>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
