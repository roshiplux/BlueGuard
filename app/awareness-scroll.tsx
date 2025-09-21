import { BottomTabs } from '@/components/bottom-tabs';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

const facts = [
  {
    title: "Sea turtles mistake plastic bags for jellyfish",
    description: "Every year, thousands of sea turtles die from ingesting plastic, mistaking it for their natural prey. Let's protect them by reducing plastic waste.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
  },
  {
    title: "Coral reefs are home to 25% of marine life",
    description: "These vibrant ecosystems are crucial for biodiversity, yet they are threatened by climate change and pollution. We must act now to preserve them.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
  },
  {
    title: "Over 8 million tons of plastic enter the ocean each year",
    description: "This plastic pollution harms marine life and ecosystems, impacting the health of our oceans. Every piece of plastic we avoid matters.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  },
  {
    title: "The Great Barrier Reef is the largest living structure on Earth",
    description: "This natural wonder is visible from space and supports a vast array of marine species. Let's preserve its beauty for future generations.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop",
  },
];

export default function AwarenessScroll() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {facts.map((fact, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground
              source={{ uri: fact.image }}
              style={styles.backgroundImage}
              imageStyle={{ opacity: 0.8 }}
            >
              <View style={styles.overlay}>
                <TouchableOpacity
                  style={styles.menuButton}
                  onPress={() => router.back()}
                >
                  <Text style={styles.menuIcon}>←</Text>
                </TouchableOpacity>
                
                <View style={styles.content}>
                  <Text style={styles.category}>Ocean Facts</Text>
                  <Text style={styles.title}>{fact.title}</Text>
                  <Text style={styles.description}>{fact.description}</Text>
                </View>

                <View style={styles.pagination}>
                  {facts.map((_, i) => (
                    <View 
                      key={i} 
                      style={[
                        styles.dot, 
                        i === index && styles.activeDot
                      ]} 
                    />
                  ))}
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

      <BottomTabs currentTab="awareness" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f8',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    height: height - 100, // Account for bottom tabs
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 24,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
  },
  menuButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    color: '#007ab8',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    lineHeight: 32,
  },
  description: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});