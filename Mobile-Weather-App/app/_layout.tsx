// this is my root layout
import {Stack} from "expo-router";
import {Tabs} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="(tabs)"
      options={{
        // headerTitle: "Today's Weather",
        // headerTintColor: "darkblue",
        headerShown: false,
      }}
      />
      <Stack.Screen 
      name="+not-found"
      options={{ 
        headerTitle: "Today's Weather",
        headerTintColor: "darkblue",
        }}/>
    </Stack>
)}