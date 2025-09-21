import { BottomTabs } from '@/components/bottom-tabs';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeDashboard() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ width: 48 }} />
          <Text style={styles.headerTitle}>Save the Sea</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Banner */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop' }}
          style={styles.hero}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Dive into Conservation</Text>
            <Text style={styles.heroSubtitle}>Every action makes a difference</Text>
          </View>
        </ImageBackground>

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.grid}>
          {[
            { name: 'Awareness', emoji: '🌊', href: '/awareness-list' },
            { name: 'Actions', emoji: '♻️', href: '/actions' },
            { name: 'Community', emoji: '👥', href: '/community' },
            { name: 'Profile', emoji: '👤', href: '/profile' }
          ].map((item, index) => (
            <Link key={index} href={item.href as any} asChild>
              <TouchableOpacity style={styles.gridButton}>
                <Text style={styles.gridButtonEmoji}>{item.emoji}</Text>
                <Text style={styles.gridButtonText}>{item.name}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Eco Tip */}
        <Text style={styles.sectionTitle}>Today's Eco Tip</Text>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop' }}
          style={styles.tipCard}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.tipOverlay}>
            <Text style={styles.tipTitle}>Reduce Plastic Use</Text>
            <Text style={styles.tipSubtitle}>Carry reusable bags and bottles to minimize plastic waste that ends up in our oceans.</Text>
          </View>
        </ImageBackground>

        {/* Statistics */}
        <Text style={styles.sectionTitle}>Your Impact</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Actions Taken</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12kg</Text>
            <Text style={styles.statLabel}>Plastic Saved</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Friends Joined</Text>
          </View>
        </View>
      </ScrollView>
      
      <BottomTabs currentTab="home" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f8',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101618',
  },
  headerButton: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 20,
  },
  hero: {
    height: 200,
    justifyContent: 'flex-end',
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#101618',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridButton: {
    width: '48%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  gridButtonEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  gridButtonText: {
    color: '#007ab8',
    fontSize: 14,
    fontWeight: '600',
  },
  tipCard: {
    height: 140,
    justifyContent: 'flex-end',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  tipOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  tipSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
