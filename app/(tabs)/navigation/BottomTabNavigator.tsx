import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingsScreen from '../screens/BookingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import RestaurantMenuScreen from '../screens/RestaurantMenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DashboardStackNavigator from '../navigation/DashboardNavigator';

type BottomTabStackParamList = {
  Dashboard: undefined;
  Bookings: undefined;
  Messages: undefined;
  Menu: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardStackNavigator} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      {/* <Tab.Screen name="Messages" component={MessagesScreen} /> */}
      <Tab.Screen name="Menu" component={RestaurantMenuScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    
  );
}
