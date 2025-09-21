import { BottomTabs } from '@/components/bottom-tabs';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const facts = [
  {
    title: "Sea turtles mistake plastic bags for jellyfish",
    description: "Every year, thousands of sea turtles die from ingesting plastic, mistaking it for their natural prey.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
    category: "Marine Life",
  },
  {
    title: "Coral reefs are home to 25% of marine life",
    description: "These vibrant ecosystems are crucial for biodiversity, yet they are threatened by climate change and pollution.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop",
    category: "Ecosystems",
  },
  {
    title: "Over 8 million tons of plastic enter the ocean each year",
    description: "This plastic pollution harms marine life and ecosystems, impacting the health of our oceans.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    category: "Pollution",
  },
  {
    title: "The Great Barrier Reef is the largest living structure on Earth",
    description: "This natural wonder is visible from space and supports a vast array of marine species.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=300&h=200&fit=crop",
    category: "Wonders",
  },
  {
    title: "Oceans produce over 70% of Earth's oxygen",
    description: "Phytoplankton in the ocean are responsible for producing most of the oxygen we breathe.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
    category: "Life Support",
  },
  {
    title: "Ocean temperatures are rising faster than ever",
    description: "Climate change is causing ocean temperatures to rise, affecting marine ecosystems worldwide.",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=300&h=200&fit=crop",
    category: "Climate",
  },
];

export default function AwarenessList() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ocean Awareness</Text>
        <Link href="/awareness-scroll" asChild>
          <TouchableOpacity style={styles.viewModeButton}>
            <Text style={styles.viewModeIcon}>⋮</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Did You Know?</Text>
        <Text style={styles.sectionSubtitle}>
          Discover fascinating facts about our oceans and marine life
        </Text>
        
        {facts.map((fact, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.7}>
            <Image
              source={{ uri: fact.image }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardCategory}>{fact.category}</Text>
              <Text style={styles.cardTitle}>{fact.title}</Text>
              <Text style={styles.cardDescription}>{fact.description}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.readMore}>Read more →</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.callToAction}>
          <Text style={styles.ctaTitle}>Want to make a difference?</Text>
          <Text style={styles.ctaDescription}>
            Start taking action today to protect our oceans
          </Text>
          <Link href="/actions" asChild>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Take Action Now</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: '#101618',
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101618',
  },
  viewModeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModeIcon: {
    fontSize: 20,
    color: '#007ab8',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#101618',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardCategory: {
    color: '#007ab8',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8,
    backgroundColor: 'rgba(0, 122, 184, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101618',
    marginBottom: 8,
    lineHeight: 24,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    alignItems: 'flex-end',
  },
  readMore: {
    fontSize: 14,
    color: '#007ab8',
    fontWeight: '600',
  },
  callToAction: {
    backgroundColor: '#007ab8',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  ctaButtonText: {
    color: '#007ab8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});