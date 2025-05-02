import React from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  data: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: 'Starters',
    data: [
      { id: 's1', name: '(V) Focaccia', description: 'Standard pizza base topped with garlic and herbs', price: 'R55' },
      { id: 's2', name: 'Chicken Livers Peri-Peri', description: 'Pan-seared with chilli, garlic, ginger in creamy tomato sauce with bruschetta', price: 'R65' },
      { id: 's3', name: 'Calamari Starter', description: 'Grilled or fried calamari with your choice of sauce', price: 'R83' },
      { id: 's4', name: '(V) Crumbed Mushrooms', description: 'Golden fried, served with tartare sauce', price: 'R84' },
      { id: 's5', name: '(V) Nachos', description: 'With cheese, jalapeños, sour cream, salsa, guac', price: 'R85' },
      { id: 's6', name: '(V) Halloumi Cheese', description: 'Crumbed halloumi with sweet chili sauce', price: 'R95' },
      { id: 's7', name: 'Cheezy Prawns', description: 'Prawns in creamy garlic, cheddar & mozzarella', price: 'R122' },
    ],
  },
  {
    title: 'Salads',
    data: [
      { id: 'sa1', name: '(V) Greek Salad', description: 'Tomato, onion, feta, olives & Greek dressing', price: 'R69' },
      { id: 'sa2', name: 'Smoked Cajun Chicken Salad', description: 'Cajun chicken, poached egg, honey mustard dressing', price: 'R94' },
      { id: 'sa3', name: 'Avocado & Prawn Salad', description: 'With thousand island dressing on greens', price: 'R125' },
    ],
  },
  {
    title: 'Wraps',
    data: [
      { id: 'w1', name: '(V) Vegetable Wrap', description: 'Roasted veg with feta', price: 'R96' },
      { id: 'w2', name: 'Chicken Wrap', description: 'Chicken fillet, peppers, halloumi, sweet & sour sauce', price: 'R105' },
      { id: 'w3', name: 'Beef Wrap', description: 'Beef strips in peri-peri stir-fry', price: 'R122' },
    ],
  },
  {
    title: 'Toasted Sandwiches',
    data: [
      { id: 'ts1', name: '(V) Cheese & Tomato', description: 'Classic sandwich with chips or salad', price: 'R66' },
      { id: 'ts2', name: 'Cajun Chicken Mayo', description: 'Roasted cajun chicken with tangy mayo', price: 'R64' },
      { id: 'ts3', name: 'Ham & Cheese', description: 'Sliced ham with gouda cheese', price: 'R72' },
      { id: 'ts4', name: 'Bacon, Egg & Cheddar', description: 'Grilled bacon, fried egg, cheddar', price: 'R83' },
      { id: 'ts5', name: 'Club Sandwich', description: 'Bacon, egg, chicken mayo, lettuce', price: 'R135' },
    ],
  },
  {
    title: 'Burgers',
    data: [
      { id: 'b1', name: 'Crumbed Chicken Cheese Burger', description: '2x chicken fillets, cheese, sweet chili, onion rings', price: 'R116' },
      { id: 'b2', name: 'Riverside Burger', description: '2x beef patties, bacon, egg, cheddar, salsa, onion rings', price: 'R198' },
      { id: 'b3', name: '(V) Veggie Burger', description: 'Double veggie patty with avocado & tomato salsa', price: 'R155' },
    ],
  },
  {
    title: 'Grills',
    data: [
      { id: 'g1', name: 'Rump (300g)', description: 'Served with chips & veg', price: 'R182' },
      { id: 'g2', name: 'Sirloin (300g)', description: 'Classic grilled steak', price: 'R182' },
      { id: 'g3', name: 'Pork Loin Ribs (300g)', description: 'Tender ribs with basting', price: 'R179' },
      { id: 'g4', name: 'T-BONE (500g)', description: 'Grilled to perfection', price: 'R261' },
      { id: 'g5', name: 'Surf & Turf', description: '300g Rump with prawns & mussels in garlic sauce', price: 'R259' },
    ],
  },
  {
    title: 'Pasta',
    data: [
      { id: 'p1', name: 'Pasta Alfredo', description: 'Ham & mushroom in creamy garlic sauce (+ Chicken +R30)', price: 'R95' },
      { id: 'p2', name: '(V) Asian Style Pasta', description: 'Vegan stir fry strips in sweet chili soya sauce', price: 'R128' },
      { id: 'p3', name: 'Pesto Chicken', description: 'Grilled chicken in pesto mushroom cream sauce', price: 'R132' },
      { id: 'p4', name: 'Pasta Dijon', description: 'Smoked chicken & prawns in mustard cream sauce', price: 'R155' },
      { id: 'p5', name: 'Seafood Pasta', description: 'Prawns, calamari, mussels in creamy sauce', price: 'R185' },
    ],
  },
  {
    title: 'Curries',
    data: [
      { id: 'c1', name: 'Chicken Quarter Bunny', description: 'Chicken curry in quarter loaf', price: 'R75' },
      { id: 'c2', name: 'Lamb Curry', description: 'Bone-in Durban-style lamb curry with rice & roti', price: 'R179' },
      { id: 'c3', name: 'Chicken and Prawn Curry', description: 'Chicken + prawn curry with rice & sambals', price: 'R195' },
    ],
  },
  {
    title: 'Pizza',
    data: [
      { id: 'pi1', name: '(V) Margherita', description: 'Tomato base with mozzarella', price: 'R72' },
      { id: 'pi2', name: 'Hawaiian Pizza', description: 'Ham & pineapple', price: 'R86' },
      { id: 'pi3', name: 'Mafiosa Pizza', description: 'Bolognese, onions, peppers, chili', price: 'R115' },
      { id: 'pi4', name: 'Frutti di Mare', description: 'Seafood melody (calamari, prawns, mussels)', price: 'R198' },
    ],
  },
  {
    title: 'Seafood',
    data: [
      { id: 'sf1', name: 'Hake and Chips', description: 'Grilled hake with chips & tartar', price: 'R145' },
      { id: 'sf2', name: 'Calamari', description: 'Grilled/fried calamari with sauce of choice', price: 'R145' },
      { id: 'sf3', name: 'Hake & Calamari Combo', description: 'Combo with rice, veg, tartar sauce', price: 'R235' },
    ],
  },
  {
    title: 'Dessert',
    data: [
      { id: 'd1', name: 'Ice Cream & Chocolate Sauce', description: 'Vanilla ice cream with chocolate drizzle', price: 'R55' },
      { id: 'd2', name: 'Malva Pudding', description: 'Served warm with vanilla custard', price: 'R80' },
      { id: 'd3', name: 'Decadent Brownies', description: 'Chocolate brownies with ice cream', price: 'R85' },
      { id: 'd4', name: 'Waffle Burger', description: 'Waffle with ice cream + sauce of choice', price: 'R99' },
    ],
  },
];

export default function RestaurantMenuScreen() {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuCard}>
      <Text style={styles.menuName}>{item.name}</Text>
      <Text style={styles.menuDescription}>{item.description}</Text>
      <Text style={styles.menuPrice}>{item.price}</Text>
    </View>
  );

  const handleReservation = () => {
    alert('Table Reservation - Coming Soon!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Menu</Text>

      <SectionList
        sections={menuSections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.reserveButton} onPress={handleReservation}>
        <Ionicons name="restaurant-outline" size={24} color="#ffffff" />
        <Text style={styles.reserveText}>Reserve a Table</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F7', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#0077B6' },
  sectionHeader: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: '#1A1A1A' },
  menuCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  menuName: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A' },
  menuDescription: { marginTop: 6, fontSize: 14, color: '#4F4F4F' },
  menuPrice: { marginTop: 6, fontSize: 15, fontWeight: '600', color: '#00B4D8' },
  reserveButton: {
    backgroundColor: '#0077B6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  reserveText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
});
