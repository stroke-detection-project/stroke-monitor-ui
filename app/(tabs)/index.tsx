import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

type RiskLevel = "LOW" | "WARNING" | "HIGH";

export default function Dashboard(){

const heartRate = 82;
const spo2 = 97;
let risk: RiskLevel = "LOW";

const lastUpdated = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
});

const callEmergency = () => {
  Linking.openURL("tel:112");
};

const getStatusColor = () => {
  if(risk === "LOW") return "#2ecc71";
  if(risk === "WARNING") return "#f39c12";
  if(risk === "HIGH") return "#ff3b30";
  return "#2ecc71";
};

const getStatusText = () => {
  if(risk === "LOW") return "Stable";
  if(risk === "WARNING") return "Warning";
  if(risk === "HIGH") return "High Risk";
  return "Stable";
};

return(

<ScrollView contentContainerStyle={styles.container}>

<Text style={styles.title}>
Stroke Monitoring
</Text>

{/* STATUS CARD */}

<View style={[styles.statusCard,{backgroundColor:getStatusColor()}]}>

<Text style={styles.statusLabel}>
Patient Status
</Text>

<Text style={styles.statusValue}>
{getStatusText()}
</Text>

</View>

{/* EMERGENCY ALERT */}

{risk === "HIGH" && (

<View style={styles.alertCard}>

<Text style={styles.alertTitle}>
⚠ Stroke Risk Detected
</Text>

<TouchableOpacity
style={styles.callButton}
onPress={callEmergency}
>

<Text style={styles.callText}>
CALL EMERGENCY
</Text>

</TouchableOpacity>

</View>

)}

{/* VITALS */}

<View style={styles.vitalRow}>

<View style={styles.vitalCard}>

<Ionicons name="heart" size={28} color="#e74c3c"/>

<Text style={styles.vitalLabel}>
Heart Rate
</Text>

<Text style={styles.vitalValue}>
{heartRate} bpm
</Text>

<Text style={styles.time}>
Updated {lastUpdated}
</Text>

</View>

<View style={styles.vitalCard}>

<Ionicons name="pulse" size={28} color="#3498db"/>

<Text style={styles.vitalLabel}>
SpO₂
</Text>

<Text style={styles.vitalValue}>
{spo2}%
</Text>

<Text style={styles.time}>
Updated {lastUpdated}
</Text>

</View>

</View>

</ScrollView>

)
}

const styles = StyleSheet.create({

container:{
padding:20,
paddingBottom:120
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:20
},

statusCard:{
padding:20,
borderRadius:14,
marginBottom:20
},

statusLabel:{
color:"white",
fontSize:16
},

statusValue:{
color:"white",
fontSize:26,
fontWeight:"bold"
},

alertCard:{
backgroundColor:"#ffe6e6",
padding:20,
borderRadius:14,
marginBottom:20
},

alertTitle:{
color:"#c0392b",
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

callButton:{
backgroundColor:"#e74c3c",
padding:12,
borderRadius:10
},

callText:{
color:"white",
textAlign:"center",
fontWeight:"bold"
},

vitalRow:{
flexDirection:"row",
justifyContent:"space-between"
},

vitalCard:{
backgroundColor:"white",
padding:20,
borderRadius:14,
width:"48%",
alignItems:"center"
},

vitalLabel:{
marginTop:8,
fontSize:16
},

vitalValue:{
fontSize:22,
fontWeight:"bold"
},

time:{
color:"gray",
fontSize:12,
marginTop:4
}

});