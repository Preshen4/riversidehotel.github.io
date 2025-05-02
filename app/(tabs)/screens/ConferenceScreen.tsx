import React from 'react';
import { Image ,View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ConferenceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Business Centre at The Riverside Hotel</Text>
      
      <Text style={styles.section}>
        The Riverside Business Centre offers 5 venues for conferences, business meetings, and functions.
      </Text>

      <Text style={styles.section}>
        Additional conference facilities are available at The Riverside Conference Centre on the hotel premises.
      </Text>

      <Text style={styles.section}>
        The Riverside Hotel has a 500kVA Generator ensuring an uninterrupted power supply to our Business Centre and the entire hotel complex.
      </Text>
      <View style={styles.carouselContainer}>
  <Swiper autoplay autoplayTimeout={3} showsPagination={true} height={200} scrollEnabled={true} >
    {[
      require('../../../assets/images/conference/location1.jpg'),
      require('../../../assets/images/conference/location2.jpg'),
      require('../../../assets/images/conference/location3.jpg'),
      require('../../../assets/images/conference/location4.jpg'),
    ].map((img, index) => (
      <Image key={index} source={img} style={styles.carouselImage} />
    ))}
  </Swiper>
</View>
      {/* Room Seating Plans */}
      <Text style={styles.subtitle}>Room Seating Plans:</Text>

      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableCellHeader}>Room</Text>
          <Text style={styles.tableCellHeader}>Size</Text>
          <Text style={styles.tableCellHeader}>Cinema</Text>
          <Text style={styles.tableCellHeader}>Schoolroom</Text>
          <Text style={styles.tableCellHeader}>U-Shape</Text>
          <Text style={styles.tableCellHeader}>Banquet</Text>
        </View>

        {[
          { room: 'Riverview 1', size: '120 ㎡', cinema: '100', school: '75', uShape: '30', banquet: '60' },
          { room: 'Riverview 2', size: '56 ㎡', cinema: '40', school: '30', uShape: '27', banquet: '40' },
          { room: 'Riverview 3', size: '40 ㎡', cinema: '25', school: '15', uShape: '15', banquet: '20' },
          { room: 'Riverview 4', size: '29 ㎡', cinema: '25', school: '15', uShape: '15', banquet: '20' },
          { room: 'Riverview 5', size: 'Boardroom', cinema: '-', school: '-', uShape: '-', banquet: '6' },
        ].map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.room}</Text>
            <Text style={styles.tableCell}>{item.size}</Text>
            <Text style={styles.tableCell}>{item.cinema}</Text>
            <Text style={styles.tableCell}>{item.school}</Text>
            <Text style={styles.tableCell}>{item.uShape}</Text>
            <Text style={styles.tableCell}>{item.banquet}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.section}>
        Each of our venues offers natural light with blackout curtaining and scenic views of the Umgeni River.
      </Text>

      <Text style={styles.section}>
        Additional conference facilities (up to 100 delegates) are available on hotel premises.
      </Text>

      <Text style={styles.subtitle}>Rates:</Text>
      <Text style={styles.section}>Full Day Conference Rate: <Text style={styles.highlight}>R 595</Text> per delegate</Text>
      <Text style={styles.section}>Half Day Conference Rate: <Text style={styles.highlight}>R 550</Text> per delegate</Text>

      <Text style={styles.subtitle}>Package Includes:</Text>
      <View style={styles.bulletList}>
        {[
          'Venue hire',
          'Arrival tea, coffee and refreshments',
          'Midmorning tea, coffee and refreshments',
          'Buffet lunch with soft drink',
          'Afternoon tea, coffee and refreshments',
          'Notepads, pens, mints and water',
          'State of the art AV',
          'Data projector, screens, and flipcharts',
          'Free high-speed Wi-Fi',
          'Free on-site parking',
          'Venue has a 500kVA Generator',
        ].map((item, idx) => (
          <Text key={idx} style={styles.bullet}>• {item}</Text>
        ))}
      </View>

      <Text style={styles.subtitle}>Enquire Now:</Text>

      {/* Basic Form */}
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Your Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Telephone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Number of Attendees" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Arrival Date (yyyy/mm/dd)" style={styles.input} />
      <TextInput placeholder="Departure Date (yyyy/mm/dd)" style={styles.input} />
      <TextInput
        placeholder="Your Message"
        style={[styles.input, { height: 100 }]}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Enquiry</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F7', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#0077B6', textAlign: 'center' },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: '#0077B6' },
  section: { fontSize: 14, marginBottom: 10, color: '#4F4F4F' },
  highlight: { fontWeight: 'bold', color: '#00B4D8' },
  table: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, marginTop: 10 },
  tableRowHeader: { flexDirection: 'row', backgroundColor: '#e0e0e0', padding: 10 },
  tableRow: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#ccc' },
  tableCellHeader: { flex: 1, fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  tableCell: { flex: 1, fontSize: 12, textAlign: 'center' },
  bulletList: { marginLeft: 10, marginTop: 5 },
  bullet: { fontSize: 14, color: '#4F4F4F', marginBottom: 5 },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#0077B6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  carouselContainer: {
    height: 200,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },  
  submitButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
