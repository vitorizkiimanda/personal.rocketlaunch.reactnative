import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import colors from 'constants/colors';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Whoops..</Text>
      <Text style={styles.textDesc}>no launch data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  textTitle: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
  textDesc: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default Empty;
