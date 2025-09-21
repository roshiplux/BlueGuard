import { BottomTabs } from '@/components/bottom-tabs';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const pledges = [
  {
    name: "Emma",
    pledge: "I pledge to recycle every day.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    time: "2 hours ago"
  },
  {
    name: "Liam",
    pledge: "I pledge to reduce my plastic consumption.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    time: "5 hours ago"
  },
  {
    name: "Olivia",
    pledge: "I pledge to use reusable bags when shopping.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    time: "1 day ago"
  },
  {
    name: "Noah",
    pledge: "I pledge to conserve water at home.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    time: "2 days ago"
  },
  {
    name: "Ava",
    pledge: "I pledge to support sustainable seafood choices.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    time: "3 days ago"
  },
];

export default function Community() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Join the Movement</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Community Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2,843</Text>
          <Text style={styles.statLabel}>Ocean Heroes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>15,692</Text>
          <Text style={styles.statLabel}>Actions Taken</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>89kg</Text>
          <Text style={styles.statLabel}>Plastic Saved</Text>
        </View>
      </View>

      {/* Pledges List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Community Pledges</Text>
        <Text style={styles.sectionSubtitle}>
          See what commitments fellow ocean heroes are making
        </Text>
        
        {pledges.map((user, index) => (
          <View key={index} style={styles.pledgeCard}>
            <Image
              source={{ uri: user.avatar }}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <View style={styles.pledgeHeader}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.time}>{user.time}</Text>
              </View>
              <Text style={styles.pledge}>{user.pledge}</Text>
            </View>
          </View>
        ))}

        {/* Challenge Section */}
        <View style={styles.challengeCard}>
          <Text style={styles.challengeEmoji}>🌊</Text>
          <Text style={styles.challengeTitle}>Ocean Month Challenge</Text>
          <Text style={styles.challengeDesc}>
            Join 2,843 ocean heroes in reducing plastic use this month. Together we can make a difference!
          </Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Challenge</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      <BottomTabs currentTab="community" />
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
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
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
  pledgeCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  pledgeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101618',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  pledge: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  challengeCard: {
    backgroundColor: '#007ab8',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  challengeEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  challengeDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  joinButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  joinButtonText: {
    color: '#007ab8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007ab8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  fabIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});