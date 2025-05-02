import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Specials: undefined;
  Shuttle: undefined;
  Contact: undefined;
  Conference: undefined;
};

type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function DashboardScreen() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      {/* Welcome Message */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Riverside Hotel</Text>
        <Text style={styles.subtitle}>Your Stay, Our Priority</Text>
      </View>

      {/* Loyalty Status */}
      <View style={styles.loyaltyCard}>
        <Text style={styles.loyaltyTitle}>Loyalty Status: <Text style={styles.loyaltyStatus}>Bronze Member</Text></Text>
        <Text style={styles.loyaltyInfo}>Earn points with every booking</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Specials')}
        >
          <Ionicons name="cash-outline" size={32} color="#0077B6" />
          <Text style={styles.actionText}>Specials</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Shuttle')}
        >
          <Ionicons name="car-sport-outline" size={32} color="#0077B6" />
          <Text style={styles.actionText}>Shuttle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Contact')}
        >
          <Ionicons name="call-outline" size={32} color="#0077B6" />
          <Text style={styles.actionText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Conference')}
        >
          <Ionicons name="briefcase-outline" size={32} color="#0077B6" />
          <Text style={styles.actionText}>Conference</Text>
        </TouchableOpacity>
      </View>


      {/* Latest Alerts */}
      <View style={styles.alerts}>
        <Text style={styles.alertTitle}>Latest Alerts</Text>
        <View style={styles.alertCard}>
          <Text style={styles.alertText}>New seasonal menu available at our restaurant!</Text>
        </View>
        <View style={styles.alertCard}>
          <Text style={styles.alertText}>Stay 12 nights to earn Silver Loyalty Status!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',
  },
  header: {
    padding: 20,
    backgroundColor: '#0077B6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#D0E8F2',
    marginTop: 4,
  },
  loyaltyCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  loyaltyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loyaltyStatus: {
    color: '#00B4D8',
  },
  loyaltyInfo: {
    marginTop: 8,
    fontSize: 14,
    color: '#4F4F4F',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  actionCard: {
    alignItems: 'center',
    margin: 10,
    padding: 20,
    width: 130,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  alerts: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  alertText: {
    fontSize: 14,
    color: '#4F4F4F',
  },
});
