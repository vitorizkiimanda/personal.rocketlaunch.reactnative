import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from 'constants/colors';

const Loading = () => {
  const dummyData = [...Array(10)];

  const skeletonItem = index => (
    <View key={index} style={styles.container}>
      <View style={styles.imageMissionPatch} />
      <View style={styles.containerText}>
        <View style={styles.textTitle} />
        <View style={[styles.textDesc, styles.marginTop4]} />
        <View style={[styles.textSubTitle, styles.marginTop8]} />
        <View style={[styles.textDesc, styles.marginTop4]} />
      </View>
    </View>
  );
  return (
    <ScrollView>
      <SkeletonPlaceholder backgroundColor={colors.gray}>
        {dummyData.map((_, index) => skeletonItem(index))}
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  containerText: {
    flex: 1,
  },
  imageMissionPatch: {
    borderRadius: 8,
    height: 48,
    marginRight: 16,
    width: 48,
  },
  marginTop4: {
    marginTop: 4,
  },
  marginTop8: {
    marginTop: 8,
  },
  textDesc: {
    borderRadius: 8,
    height: 12,
    width: 72,
  },
  textSubTitle: {
    borderRadius: 8,
    height: 14,
    width: 96,
  },
  textTitle: {
    borderRadius: 8,
    height: 16,
    width: 144,
  },
});

export default Loading;
