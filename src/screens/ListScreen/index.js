import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {GetLaunches} from 'service/launchService';
import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';
import {BarIndicator} from 'react-native-indicators';
import colors from 'constants/colors';

const ListScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // state
  const [stateIsLoading, setIsLoading] = useState(true);
  const [stateIsLoadingMore, setIsLoadingMore] = useState(false);
  const [stateIsError, setIsError] = useState(false);
  const [stateLaunches, setLaunches] = useState({});

  useEffect(() => {
    // reset state
    setIsLoading(true);
    setIsLoadingMore(false);
    setIsError(false);
    setLaunches({});

    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setIsLoadingMore(false);
    setIsError(false);
    try {
      const rawData = await GetLaunches(10, null);
      const {launches = {}} = rawData.data;
      setLaunches(launches);
      setIsLoading(false);
    } catch (err) {
      //   console.log('err', err, err.message, err.statusCode, err.status);
      setIsError(false);
    }
  };

  // UI logic
  const loadMore = async () => {
    if (stateIsLoadingMore || !stateLaunches.hasMore) {
      return null;
    }
    try {
      setIsLoadingMore(true);
      const rawData = await GetLaunches(10, stateLaunches.cursor);
      const {launches = {}} = rawData.data;
      const newDataLaunches = {
        ...launches,
        launches: [...stateLaunches.launches, ...launches?.launches],
      };
      setLaunches(newDataLaunches);
      setIsLoadingMore(false);
    } catch (err) {
      //   console.log('err', err, err.message, err.statusCode, err.status);
      setIsError(false);
    }
  };

  // render UI
  const renderContent = () => {
    if (stateIsError) {
      return <Error onReload={getData} />;
    }
    if (stateIsLoading) {
      return <Loading />;
    }
    return <List data={stateLaunches} loadMore={loadMore} />;
  };

  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderContent()}
      {stateIsLoadingMore && (
        <BarIndicator
          color={colors.primary}
          count={4}
          size={20}
          style={styles.barIndicator}
          interaction
          animationDuration={1000}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barIndicator: {
    flex: 0,
    marginBottom: 8,
    marginTop: 8,
  },
  containerSafeAreaView: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default ListScreen;
