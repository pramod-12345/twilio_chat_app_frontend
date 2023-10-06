import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {colors} from '../theme';

export function Loader() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
