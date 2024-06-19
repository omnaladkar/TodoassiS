import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { SQLiteProvider } from "expo-sqlite";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initializeDatabase } from "@/database";


export default function TabLayout() {
  return (
    <GestureHandlerRootView>
       <SQLiteProvider databaseName="task" onInit={initializeDatabase}>
       <Tabs screenOptions={{ headerShown: false }}>
      
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
    </SQLiteProvider>

    </GestureHandlerRootView>
   
  );
}
