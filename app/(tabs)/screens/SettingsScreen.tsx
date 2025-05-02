import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const handleLogout = () => {
    // TODO: Clear auth state and navigate back to login
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLanguageSelect = () => {
    // TODO: Implement language switching
    Alert.alert('Coming Soon', 'Multi-language support coming soon!');
  };

  const handleProfileUpdate = () => {
    // TODO: Navigate to Profile Update Screen if needed
    Alert.alert('Coming Soon', 'Profile editing coming soon!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Profile */}
      <TouchableOpacity style={styles.option} onPress={handleProfileUpdate}>
        <Ionicons name="person-outline" size={24} color="#0077B6" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>

      {/* Language Selector */}
      <TouchableOpacity style={styles.option} onPress={handleLanguageSelect}>
        <Ionicons name="language-outline" size={24} color="#0077B6" />
        <Text style={styles.optionText}>Language</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={[styles.option, { marginTop: 40 }]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={[styles.optionText, { color: 'red' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F7', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0077B6', marginBottom: 30 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  optionText: { fontSize: 16, marginLeft: 15, fontWeight: '500', color: '#1A1A1A' },
});
