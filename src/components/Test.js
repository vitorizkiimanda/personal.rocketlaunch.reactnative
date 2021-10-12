import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {GetLaunches} from 'service/launchService';

const Test = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      console.log('getData');
      const raw = await GetLaunches(10, null);
      console.log('raw', raw);
    } catch (err) {
      console.log('err', err, err.message, err.statusCode, err.status);
    }
  };

  return (
    <View>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
      <Text>tew</Text>
    </View>
  );
};

export default Test;
