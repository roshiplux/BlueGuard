import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Awareness() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Ocean Awareness</Text>
        <Text style={styles.subtitle}>Learn about marine conservation</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌊 Ocean Facts</Text>
          <Text style={styles.cardText}>
            The ocean covers 71% of Earth's surface and contains 99% of the planet's living space.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🐠 Marine Life</Text>
          <Text style={styles.cardText}>
            Over 230,000 marine species have been documented, but scientists estimate millions more remain undiscovered.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>♻️ Pollution Impact</Text>
          <Text style={styles.cardText}>
            8 million tons of plastic waste enter our oceans every year, threatening marine ecosystems.
          </Text>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f8',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#101618',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});