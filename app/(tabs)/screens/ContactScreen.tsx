import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
  // 📞 Handle call
  const makeCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Riverside Hotel */}
      <Text style={styles.title}>The Riverside Hotel</Text>
      <TouchableOpacity onPress={() => makeCall('+27315630600')}>
        <Text style={styles.link}>Tel: +27 (0) 31 563 0600</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: reservations@riversidehotel.co.za</Text>
      <Text style={styles.text}>Website: www.riversidehotel.co.za</Text>
      <Text style={styles.text}>Bookings: Check for availability</Text>
      <Text style={styles.text}>Address: 10 Kenneth Kaunda Road, Durban North</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Riverside Grill */}
      <Text style={styles.title}>The Riverside Grill</Text>
      <TouchableOpacity onPress={() => makeCall('+27315630600')}>
        <Text style={styles.link}>Tel: +27 (0) 31 563 0600</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: fbman@riversidehotel.co.za</Text>
      <Text style={styles.text}>Website: www.riversidehotel.co.za</Text>
      <Text style={styles.text}>Address: Situated inside Riverside Hotel, 10 Kenneth Kaunda Road, Durban North</Text>
      <Text style={styles.text}>Hours:</Text>
      <Text style={styles.text}>Breakfast: 6:30 – 10:30</Text>
      <Text style={styles.text}>Lunch: 12:00 – 17:00</Text>
      <Text style={styles.text}>Dinner: 17:00 – 22:00</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Riverside Cafe */}
      <Text style={styles.title}>The Riverside Cafe Durban</Text>
      <TouchableOpacity onPress={() => makeCall('+27315630600')}>
        <Text style={styles.link}>Tel: +27 (0) 31 563 0600</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: banquet2@riversidehotel.co.za</Text>
      <Text style={styles.text}>Website: www.riversidebusinesscentre.co.za</Text>
      <Text style={styles.text}>Address: Situated next to Riverside Hotel, 10 Kenneth Kaunda Road, Durban North</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Riverside Conference Centre */}
      <Text style={styles.title}>The Riverside Conference Centre</Text>
      <TouchableOpacity onPress={() => makeCall('+27315630600')}>
        <Text style={styles.link}>Tel: +27 (0) 31 563 0600</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: banquet2@riversidehotel.co.za</Text>
      <Text style={styles.text}>Website: www.riversideconferencecentre.co.za</Text>
      <Text style={styles.text}>Address: Situated next to Riverside Hotel, 10 Kenneth Kaunda Road, Durban North</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Hair Salon */}
      <Text style={styles.title}>Martin Pearman – Hair Creative</Text>
      <TouchableOpacity onPress={() => makeCall('0680185808')}>
        <Text style={styles.link}>Tel: 068 018 5808</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: Martin.pearman25@gmail.com</Text>
      <Text style={styles.text}>Address: Situated inside Riverside Hotel Complex, 10 Kenneth Kaunda Road, Durban North</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Hops Riverside Bar */}
      <Text style={styles.title}>Hops Riverside Bar and Restaurant</Text>
      <TouchableOpacity onPress={() => makeCall('0874742671')}>
        <Text style={styles.link}>Tel: 087 474 2671</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: Riverside@crowbar.co.za</Text>
      <Text style={styles.text}>Address: Situated inside Riverside Hotel Complex, 10 Kenneth Kaunda Road, Durban North</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Riverside Spa */}
      <Text style={styles.title}>Riverside Spa</Text>
      <TouchableOpacity onPress={() => makeCall('0315630600')}>
        <Text style={styles.link}>Tel: 031 563 0600</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => makeCall('0768922830')}>
        <Text style={styles.link}>Cell: 076 892 2830</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Address: Situated inside Riverside Hotel Complex, 10 Kenneth Kaunda Road, Durban North</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F7', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#0077B6', marginBottom: 8, marginTop: 20 },
  text: { fontSize: 14, marginBottom: 5, color: '#4F4F4F' },
  link: { fontSize: 14, marginBottom: 5, color: '#00B4D8', textDecorationLine: 'underline' },
  divider: { height: 1, backgroundColor: '#ccc', marginVertical: 15 },
});
