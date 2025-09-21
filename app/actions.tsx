import { BottomTabs } from '@/components/bottom-tabs';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const actions = [
  { id: 1, title: "Use reusable bottles", desc: "Reduce waste by using reusable water bottles", completed: false, points: 5 },
  { id: 2, title: "Avoid plastic straws", desc: "Say no to single-use plastic straws", completed: true, points: 3 },
  { id: 3, title: "Join a beach cleanup", desc: "Participate in local beach cleanup events", completed: false, points: 20 },
  { id: 4, title: "Buy sustainable products", desc: "Choose eco-friendly products", completed: false, points: 10 },
  { id: 5, title: "Save water at home", desc: "Conserve water in daily activities", completed: true, points: 8 },
  { id: 6, title: "Walk or bike more", desc: "Reduce your carbon footprint", completed: false, points: 15 },
  { id: 7, title: "Use reusable bags", desc: "Bring your own bags when shopping", completed: false, points: 5 },
  { id: 8, title: "Choose sustainable seafood", desc: "Support responsible fishing practices", completed: false, points: 12 },
];

export default function Actions() {
  const router = useRouter();
  const [toggles, setToggles] = useState(actions.map(a => a.completed));

  const toggleSwitch = (index: number) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
    
    if (newToggles[index]) {
      Alert.alert(
        '🎉 Great Job!', 
        `You've completed "${actions[index].title}"! +${actions[index].points} points earned.`,
        [{ text: 'Keep Going!', style: 'default' }]
      );
    }
  };

  const completedCount = toggles.filter(Boolean).length;
  const totalPoints = actions.reduce((sum, action, index) => 
    sum + (toggles[index] ? action.points : 0), 0
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Take Action</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Progress Stats */}
      <View style={styles.progressContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{completedCount}</Text>
          <Text style={styles.statLabel}>Actions Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totalPoints}</Text>
          <Text style={styles.statLabel}>Points Earned</Text>
        </View>
      </View>

      {/* Action Checklist */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Daily Actions</Text>
        <Text style={styles.sectionSubtitle}>
          Complete these actions to protect our oceans and earn points
        </Text>
        
        {actions.map((action, index) => (
          <View key={action.id} style={[styles.item, toggles[index] && styles.completedItem]}>
            <View style={styles.textContainer}>
              <Text style={[styles.title, toggles[index] && styles.completedText]}>
                {action.title}
              </Text>
              <Text style={styles.description}>{action.desc}</Text>
              <Text style={styles.points}>+{action.points} points</Text>
            </View>
            <Switch
              trackColor={{ false: '#d1d5db', true: '#007ab8' }}
              thumbColor={toggles[index] ? '#fff' : '#f4f4f4'}
              ios_backgroundColor="#d1d5db"
              onValueChange={() => toggleSwitch(index)}
              value={toggles[index]}
            />
          </View>
        ))}

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Pro Tip</Text>
          <Text style={styles.tipText}>
            Complete daily actions to earn points and unlock new conservation challenges! Every small action makes a difference.
          </Text>
        </View>
      </ScrollView>

      <BottomTabs currentTab="actions" />
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
  progressContainer: {
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  completedItem: {
    backgroundColor: '#f0f9ff',
    borderWidth: 1,
    borderColor: '#007ab8',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101618',
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  points: {
    fontSize: 12,
    color: '#007ab8',
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007ab8',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});