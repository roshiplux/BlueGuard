import { BottomTabs } from '@/components/bottom-tabs';
import { OceanBackground } from '@/components/ocean-background';
import { ThemedView } from '@/components/themed-view';
import { Alert, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function About() {
  const handleEmailPress = () => {
    const email = 'lumorakdu@gmail.com';
    Linking.openURL(`mailto:${email}`).catch(() => {
      Alert.alert('Email Error', 'Could not open email app. Please contact us at: lumorakdu@gmail.com');
    });
  };

  return (
    <OceanBackground>
      <ThemedView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About BlueGuard</Text>
        
        {/* App Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌊 Our Mission</Text>
          <Text style={styles.description}>
            BlueGuard is dedicated to ocean conservation and marine life protection. 
            Through awareness, action, and community engagement, we're working together 
            to preserve our beautiful oceans for future generations.
          </Text>
        </View>

        {/* Team Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👥 Design Team</Text>
          <View style={styles.teamCard}>
            <Text style={styles.teamText}>Design by Team Lumora</Text>
            <Text style={styles.teamSubtext}>Passionate about ocean conservation</Text>
          </View>
        </View>

        {/* Rights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📋 Rights</Text>
          <Text style={styles.rightsText}>All rights reserved</Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📧 Contact Us</Text>
          <TouchableOpacity style={styles.contactCard} onPress={handleEmailPress}>
            <Text style={styles.contactLabel}>Get in touch:</Text>
            <Text style={styles.emailText}>lumorakdu@gmail.com</Text>
            <Text style={styles.contactHint}>Tap to send email</Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 App Info</Text>
          <View style={styles.versionCard}>
            <Text style={styles.versionText}>BlueGuard v1.0.0</Text>
            <Text style={styles.versionSubtext}>Built with love for our oceans</Text>
          </View>
        </View>

        {/* Ocean Quote */}
        <View style={styles.quoteSection}>
          <Text style={styles.quote}>
            "The sea, once it casts its spell, holds one in its net of wonder forever."
          </Text>
          <Text style={styles.quoteAuthor}>- Jacques Cousteau</Text>
        </View>
        </ScrollView>
        
        <BottomTabs currentTab="about" />
      </ThemedView>
    </OceanBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 247, 248, 0.9)',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#101618',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
  teamCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 4,
  },
  teamSubtext: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  rightsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  contactCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 4,
  },
  contactHint: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  versionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  versionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007ab8',
    marginBottom: 4,
  },
  versionSubtext: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  quoteSection: {
    backgroundColor: 'rgba(0, 122, 184, 0.1)',
    padding: 20,
    borderRadius: 12,
    marginTop: 8,
  },
  quote: {
    fontSize: 16,
    color: '#007ab8',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#007ab8',
    textAlign: 'center',
    fontWeight: '500',
  },
});