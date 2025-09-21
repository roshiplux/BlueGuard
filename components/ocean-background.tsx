import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface OceanBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function OceanBackground({ children, style }: OceanBackgroundProps) {
  return (
    <View style={[styles.background, style]}>
      <View style={styles.oceanLayer1} />
      <View style={styles.oceanLayer2} />
      <View style={styles.oceanLayer3} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
  },
  oceanLayer1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#87CEEB', // Sky blue like your image
    opacity: 0.3,
  },
  oceanLayer2: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#4682B4', // Steel blue for depth
    opacity: 0.2,
  },
  oceanLayer3: {
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1E90FF', // Dodger blue for deep ocean
    opacity: 0.15,
  },
});