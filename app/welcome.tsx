import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Animated Waves (Simplified for RN) */}
      <View style={[styles.waveContainer, { backgroundColor: 'rgba(0,122,184,0.1)' }]} />
      <View style={[styles.waveContainer, { backgroundColor: 'rgba(0,122,184,0.2)', top: 10 }]} />
      <View style={[styles.waveContainer, { backgroundColor: 'rgba(0,122,184,0.3)', top: 20 }]} />

      <View style={styles.content}>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Save the Sea</Text>
        <Text style={styles.subtitle}>Save the Future</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/why-sea-matters" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#f5f7f8',
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    zIndex: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    paddingTop: 40,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 24,
    tintColor: '#007ab8',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: '#101618',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    textAlign: 'center',
    color: '#101618',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    paddingBottom: 32,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#007ab8',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});