import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BeTheChange() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=500&fit=crop' }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Be the Change</Text>
        <Text style={styles.description}>
          Small habits like using reusable bottles, avoiding straws, and recycling can save marine life. 
          Every action counts towards a cleaner ocean.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Saving the Sea</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f8',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 32,
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f1c23',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(15, 28, 35, 0.7)',
    lineHeight: 24,
    maxWidth: 320,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
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