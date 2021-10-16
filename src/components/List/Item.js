import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from 'constants/colors';
import ImageCustom from 'components/ImageCustom';

const Item = props => {
  const {data, index} = props;

  if (!data) {
    return null;
  }

  return (
    <View style={styleContainer(index).container}>
      {!!data.mission.missionPatch && (
        <ImageCustom
          style={styles.imageMissionPatch}
          source={{
            uri: data.mission.missionPatch,
          }}
        />
      )}
      <View style={styles.containerText}>
        <Text style={styles.textTitle}>{data.mission.name}</Text>
        <Text style={styles.textDesc}>site: {data.site}</Text>

        <Text style={[styles.textSubTitle, styles.marginTop8]}>Rocket</Text>
        <Text style={styles.textDesc}>
          {`${data.rocket.name} [${data.rocket.type}]`}
        </Text>
      </View>
    </View>
  );
};

const styleContainer = index =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 8,
      flexDirection: 'row',
      marginHorizontal: 16,
      marginBottom: 16,
      marginTop: index === 0 ? 16 : 0,
      padding: 16,
    },
  });

const styles = StyleSheet.create({
  containerText: {
    flex: 1,
  },
  imageMissionPatch: {
    height: 48,
    marginRight: 16,
    width: 48,
  },
  marginTop8: {
    marginTop: 8,
  },
  textDesc: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600',
  },
  textSubTitle: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '900',
  },
  textTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '900',
  },
});

Item.defaultProps = {
  data: null,
  index: 0,
};

export default Item;
