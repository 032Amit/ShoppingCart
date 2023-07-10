import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Iprops {
  message: string;
}
const BlankListMsg = (props: Iprops) => {
  const {message} = props;
  return <Text style={styles.msgStyl}>{message}</Text>;
};

const styles = StyleSheet.create({
  msgStyl: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BlankListMsg;
