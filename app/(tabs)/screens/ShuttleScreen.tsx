import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image, Dimensions } from 'react-native';

export default function ShuttleScreen() {
    const shuttleImage = require('../../../assets/images/shuttleService/shuttle-service.png'); // Replace with actual image path

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Shuttle Service at Riverside Hotel Durban</Text>

            <Image source={shuttleImage} style={styles.shuttleImage} />

            <Text style={styles.description}>
                The Riverside Hotel now offers an on-site shuttle service – exclusively available to hotel residents.
                For guests requiring the convenience of a car during their stay, our front desk team is able to assist
                whether you require an airport transfer or a quick errand to the local shops.
            </Text>
            <Text style={styles.description}>
                Worrying about finding a taxi when you touch down at the airport can stress you out on your flight – 
                it’s reassuring to know you’ll have a car waiting for you on arrival. Let us help you make your holiday 
                as hassle free as possible!
            </Text>

            <Text style={styles.subtitle}>Shuttle Service Rates:</Text>
            <View style={styles.rateList}>
                <Text style={styles.rateItem}>Riverside – Gateway Mall – R200 (return)</Text>
                <Text style={styles.rateItem}>Riverside – Pavilion Mall – R250 (return)</Text>
                <Text style={styles.rateItem}>Riverside – La Lucia Mall – R150 (return)</Text>
                <Text style={styles.rateItem}>Riverside – King Shaka Airport – R500</Text>
            </View>

            <Text style={styles.contact}>
                To book, please contact reception at <Text style={styles.contactNumber}>031 563 0600</Text>
            </Text>
        </ScrollView>
    );
}

const screenWidth = Dimensions.get('window').width;
const imageSize = (screenWidth - 40); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F7',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0077B6',
        marginBottom: 20,
        textAlign: 'center',
    },
    shuttleImage: {
        width: imageSize,
        height: 250, // Set appropriate height
        borderRadius: 16,
        marginBottom: 20,
        resizeMode: 'cover',
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        textAlign: 'justify',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0077B6',
        marginBottom: 10,
    },
    rateList: {
        marginBottom: 20,
    },
    rateItem: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    contact: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    contactNumber: {
        fontWeight: 'bold',
        color: '#0077B6',
    },
});
