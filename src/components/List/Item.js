import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Item = props => {
  const {data, index} = props;

  if (!data) {
    return null;
  }

  return (
    <View style={styleContainer(index).container}>
      <Text>{data.id}</Text>
      <Text>{data.isBooked.toString()}</Text>

      <Text style={styles.textTitle}>mission : </Text>
      <Text>{data.mission.missionPatch}</Text>
      <Text>{data.mission.name}</Text>

      <Text>rocket : </Text>
      <Text>{data.rocket.id}</Text>
      <Text>{data.rocket.name}</Text>
      <Text>{data.rocket.type}</Text>
    </View>
  );
};

const styleContainer = index =>
  StyleSheet.create({
    container: {
      backgroundColor: '#f00',
      marginTop: index > 0 ? 16 : 0,
      flex: 1,
    },
  });

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontWeight: '900',
  },
});

Item.defaultProps = {
  data: null,
  index: 0,
};

export default Item;
