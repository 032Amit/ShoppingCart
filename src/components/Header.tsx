import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IHeaderProps {
  title: string;
}
const Header = (props: IHeaderProps) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#fff',
    elevation: 1,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Header;
