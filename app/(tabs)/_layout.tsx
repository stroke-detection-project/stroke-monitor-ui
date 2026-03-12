import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {

return(

<Tabs
screenOptions={({route})=>({

tabBarActiveTintColor:"#2ecc71",

tabBarIcon:({color,size})=>{

let iconName:any="home";

if(route.name==="index") iconName="home";
if(route.name==="vitals") iconName="pulse";
if(route.name==="alerts") iconName="warning";
if(route.name==="history") iconName="stats-chart";
if(route.name==="face") iconName="camera";

return <Ionicons name={iconName} size={size} color={color}/>

}

})}
>

<Tabs.Screen name="index" options={{title:"Dashboard"}}/>
<Tabs.Screen name="vitals" options={{title:"Vitals"}}/>
<Tabs.Screen name="alerts" options={{title:"Alerts"}}/>
<Tabs.Screen name="history" options={{title:"History"}}/>
<Tabs.Screen name="face" options={{title:"Face Scan"}}/>

</Tabs>

)

}