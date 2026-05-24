import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {

  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#dd6666',

        tabBarStyle: {
          height: 100,
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 5,
          marginTop: 6,
        },
    
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={28} color={color} />          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bag-shopping" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="heart-fill" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" size={24} color={color} />
          ),
        }}
      />

    </Tabs>

  )
}