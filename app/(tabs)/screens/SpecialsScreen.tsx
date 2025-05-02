import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

export default function SpecialsScreen() {
    const specialsImages = [
        require('../../../assets/images/specials/riverside-grill-specials.jpg'),
        require('../../../assets/images/specials/R90.00-pp-20240219.png'),
        require('../../../assets/images/specials/happy-hour.png'),
        require('../../../assets/images/specials/date-night-special-2-663x1024.jpg'),
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Our Specials</Text>

            <View style={styles.grid}>
                {specialsImages.map((img, index) => (
                    <Image key={index} source={img} style={styles.specialImage} />
                ))}
            </View>
        </ScrollView>
    );
}

const screenWidth = Dimensions.get('window').width;
const imageSize = (screenWidth - 60) / 2; 

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
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    specialImage: {
        width: imageSize,
        height: imageSize,
        borderRadius: 16,
        marginBottom: 20,
        resizeMode: 'cover',
    },
});
