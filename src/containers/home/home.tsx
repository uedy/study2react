import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Home: React.FC = () => {
  return <Text style={styles.highlight}>text</Text>;
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
});
