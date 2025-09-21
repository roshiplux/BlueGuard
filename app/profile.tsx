import { ThemedView } from '@/components/themed-view';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Settings panel coming soon!');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>🌊</Text>
          </View>
          <Text style={styles.name}>Ocean Hero</Text>
          <Text style={styles.email}>hero@oceanconservation.com</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Impact</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>25</Text>
              <Text style={styles.statLabel}>Actions Completed</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>750</Text>
              <Text style={styles.statLabel}>Points Earned</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12kg</Text>
              <Text style={styles.statLabel}>Plastic Prevented</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>#3</Text>
              <Text style={styles.statLabel}>Global Rank</Text>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsList}>
            {[
              { name: 'First Steps', description: 'Completed first ocean action', emoji: '👶', earned: true },
              { name: 'Plastic Warrior', description: 'Avoided 100 plastic items', emoji: '⚔️', earned: true },
              { name: 'Beach Guardian', description: 'Completed 5 beach cleanups', emoji: '🏖️', earned: false },
              { name: 'Ocean Ambassador', description: 'Invited 10 friends', emoji: '👥', earned: false },
            ].map((achievement, index) => (
              <View key={index} style={[styles.achievementCard, !achievement.earned && styles.lockedAchievement]}>
                <Text style={[styles.achievementEmoji, !achievement.earned && styles.lockedEmoji]}>
                  {achievement.earned ? achievement.emoji : '🔒'}
                </Text>
                <View style={styles.achievementInfo}>
                  <Text style={[styles.achievementName, !achievement.earned && styles.lockedText]}>
                    {achievement.name}
                  </Text>
                  <Text style={[styles.achievementDesc, !achievement.earned && styles.lockedText]}>
                    {achievement.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
            <Text style={styles.menuEmoji}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>📊</Text>
            <Text style={styles.menuText}>Statistics</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>🎯</Text>
            <Text style={styles.menuText}>Goals</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>ℹ️</Text>
            <Text style={styles.menuText}>About</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007ab8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    fontSize: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101618',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#007ab8',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101618',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
  achievementsSection: {
    marginBottom: 24,
  },
  achievementsList: {
    gap: 12,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  lockedAchievement: {
    backgroundColor: '#f8f9fa',
  },
  achievementEmoji: {
    fontSize: 24,
    marginRight: 16,
  },
  lockedEmoji: {
    opacity: 0.3,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#101618',
    marginBottom: 2,
  },
  achievementDesc: {
    fontSize: 12,
    color: '#666',
  },
  lockedText: {
    opacity: 0.5,
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#101618',
  },
  menuArrow: {
    fontSize: 20,
    color: '#666',
  },
});