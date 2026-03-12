import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "#2ecc71",
        tabBarIcon: ({ color, size }) => {

          let iconName: any;

          if (route.name === "index") iconName = "home";
          else if (route.name === "vitals") iconName = "pulse";
          else if (route.name === "alerts") iconName = "warning";
          else if (route.name === "history") iconName = "stats-chart";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >

      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />

      <Tabs.Screen name="vitals" options={{ title: "Vitals" }} />

      <Tabs.Screen name="alerts" options={{ title: "Alerts" }} />

      <Tabs.Screen name="history" options={{ title: "History" }} />

    </Tabs>
  );
}