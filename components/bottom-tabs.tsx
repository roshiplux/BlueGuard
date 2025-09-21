import { Link, usePathname } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BottomTabsProps {
  currentTab?: string;
}

export function BottomTabs({ currentTab }: BottomTabsProps) {
  const pathname = usePathname();
  
  const isActive = (tab: string) => {
    if (currentTab) return currentTab === tab;
    
    switch (tab) {
      case 'home':
        return pathname === '/(tabs)' || pathname === '/(tabs)/' || pathname === '/(tabs)/index';
      case 'awareness':
        return pathname.includes('awareness');
      case 'actions':
        return pathname === '/actions';
      case 'community':
        return pathname === '/community';
      case 'profile':
        return pathname === '/profile';
      case 'about':
        return pathname === '/about';
      default:
        return false;
    }
  };

  return (
    <View style={styles.tabBar}>
      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('home') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('home') && styles.activeEmoji]}>🏠</Text>
          <Text style={[styles.tabLabel, isActive('home') && styles.activeLabel]}>Home</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/awareness" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('awareness') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('awareness') && styles.activeEmoji]}>💧</Text>
          <Text style={[styles.tabLabel, isActive('awareness') && styles.activeLabel]}>Awareness</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/actions" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('actions') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('actions') && styles.activeEmoji]}>✊</Text>
          <Text style={[styles.tabLabel, isActive('actions') && styles.activeLabel]}>Actions</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/community" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('community') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('community') && styles.activeEmoji]}>👥</Text>
          <Text style={[styles.tabLabel, isActive('community') && styles.activeLabel]}>Community</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/profile" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('profile') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('profile') && styles.activeEmoji]}>👤</Text>
          <Text style={[styles.tabLabel, isActive('profile') && styles.activeLabel]}>Profile</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/about" asChild>
        <TouchableOpacity style={[styles.tabItem, isActive('about') && styles.activeTab]}>
          <Text style={[styles.tabEmoji, isActive('about') && styles.activeEmoji]}>ℹ️</Text>
          <Text style={[styles.tabLabel, isActive('about') && styles.activeLabel]}>About</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 8,
    minWidth: 50,
  },
  activeTab: {
    backgroundColor: 'rgba(0, 122, 184, 0.1)',
  },
  tabEmoji: {
    fontSize: 18,
    marginBottom: 1,
  },
  activeEmoji: {
    transform: [{ scale: 1.1 }],
  },
  tabLabel: {
    fontSize: 9,
    color: '#666',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#007ab8',
    fontWeight: 'bold',
  },
});