// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// above is the example code 

// below is the code that I am trying to implement
// this is my tabs layout 
import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions= {{
        tabBarActiveTintColor: "darkblue"
      }}
      >
      <Tabs.Screen 
      name="index"
      options={{
        headerTitle: "Today's Weather",
        headerTintColor: "darkblue",
        tabBarIcon: ({focused, color}) => (
        <Ionicons
        name= "location"
        //  name={focused? "location-filled": "locate-outline"} (this is prefered but not working)
        color= {color}
         size={28}
        />
      ),
      }}
      />
      <Tabs.Screen
      name=SearchBar={SearchBar}
      />
    </Tabs>
)}