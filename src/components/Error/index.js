import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import colors from 'constants/colors';

const Error = props => {
  const {onReload} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Whoops..</Text>
      <Text style={styles.textDesc}>failed to get data</Text>

      {onReload && (
        <TouchableOpacity
          style={styles.button}
          onPress={onReload}
          accessibilityLabel="content button">
          <Text style={styles.textButton}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  textButton: {
    color: colors.light,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 4,
  },
  textDesc: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  textTitle: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
});

Error.defaultProps = {
  onReload: null,
};

export default Error;
