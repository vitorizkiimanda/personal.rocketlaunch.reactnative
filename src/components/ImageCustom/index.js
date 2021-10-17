import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import colors from 'constants/colors';

const ImageCustom = props => {
  const {style, source} = props;

  // state
  const [stateIsLoading, setIsLoading] = useState(true);
  const [stateIsError, setIsError] = useState(false);
  const [stateIsAnimating, setIsAnimating] = useState(false);
  const [stateFadeAnimation] = useState(new Animated.Value(0));

  // animation for lazy image
  useEffect(() => {
    const onFadeInComplete = () => {
      if (stateIsLoading) {
        fadeOut();
      } else {
        Animated.timing(stateFadeAnimation).stop();
      }
    };

    const onFadeOutComplete = () => {
      if (stateIsLoading) {
        fadeIn();
      } else {
        Animated.timing(stateFadeAnimation).stop();
      }
    };

    const fadeIn = () => {
      Animated.timing(stateFadeAnimation, {
        toValue: 1,
        friction: 1,
        tension: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(onFadeInComplete);
    };

    const fadeOut = () => {
      Animated.timing(stateFadeAnimation, {
        toValue: 0,
        friction: 1,
        tension: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(onFadeOutComplete);
    };
    if (!stateIsAnimating) {
      setIsAnimating(true);
      fadeIn();
    }
  }, [stateFadeAnimation, stateIsAnimating, stateIsLoading]);

  if (!source || stateIsError) {
    return null;
  }

  return (
    <Animated.Image
      style={styles(style, stateIsLoading, stateFadeAnimation).image}
      source={source}
      onError={() => setIsError(true)}
      onLoad={() => setIsLoading(false)}
    />
  );
};

const styles = (style, stateIsLoading, stateFadeAnimation) =>
  StyleSheet.create({
    image: {
      ...style,
      backgroundColor: stateIsLoading ? colors.gray : style.backgroundColor,
      borderRadius: stateIsLoading ? 8 : style.borderRadius,
      opacity: stateIsLoading ? stateFadeAnimation : style.opacity,
    },
  });

ImageCustom.defaultProps = {
  style: {},
  source: null,
};

export default ImageCustom;
