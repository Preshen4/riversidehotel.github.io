import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import SpecialsScreen from '../screens/SpecialsScreen';
import ShuttleScreen from '../screens/ShuttleScreen';
import ContactScreen  from '../screens/ContactScreen';
import ConferenceScreen from '../screens/ConferenceScreen';

type DashboardStackParamList = {
  DashboardMain: undefined;
  Specials: undefined;
  Shuttle: undefined;
  Contact: undefined;
  Conference: undefined;
};

const Stack = createNativeStackNavigator<DashboardStackParamList>();

export default function DashboardStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="Specials" component={SpecialsScreen} />
      <Stack.Screen name="Shuttle" component={ShuttleScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Conference" component={ConferenceScreen} />
    </Stack.Navigator>
  );
}
