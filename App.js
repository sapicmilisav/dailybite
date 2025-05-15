import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from './constants/styles';
import HomeScreen from './screens/HomeScreen';
import MealScreen from './screens/MealScreen';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Tabs'
            component={BottomTabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealScreen}
            options={{ title: 'Detalji obroka' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
