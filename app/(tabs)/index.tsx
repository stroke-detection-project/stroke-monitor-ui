import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

export default function Dashboard() {

  const heartRate = 82;
  const spo2 = 97;
  const risk = "HIGH"; // change dynamically later
  const deviceConnected = true;
  const battery = 85;

  const callEmergency = () => {
    Linking.openURL("tel:112"); // India emergency
  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Stroke Monitoring Dashboard</Text>

      {/* EMERGENCY ALERT */}

      {risk === "HIGH" && (
        <View style={styles.alertBanner}>

          <Text style={styles.alertTitle}>
            ⚠ HIGH STROKE RISK DETECTED
          </Text>

          <Text style={styles.alertText}>
            Abnormal Heart Rhythm
          </Text>

          <Text style={styles.alertText}>
            Possible Fall Detected
          </Text>

          <TouchableOpacity
            style={styles.emergencyButton}
            onPress={callEmergency}
          >
            <Text style={styles.emergencyText}>
              CALL EMERGENCY CONTACT
            </Text>
          </TouchableOpacity>

        </View>
      )}

      {/* STROKE RISK */}

      <View style={styles.riskCard}>
        <Text style={styles.cardTitle}>Stroke Risk</Text>
        <Text style={styles.riskValue}>{risk}</Text>
      </View>

      {/* VITALS */}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heart Rate</Text>
        <Text style={styles.value}>{heartRate} bpm</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>SpO₂</Text>
        <Text style={styles.value}>{spo2}%</Text>
      </View>

      {/* DEVICE STATUS */}

      <Text style={styles.section}>Device Status</Text>

      <View style={styles.card}>
        <Text>ESP32 Connection</Text>
        <Text style={styles.status}>
          {deviceConnected ? "Connected" : "Disconnected"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>Battery</Text>
        <Text style={styles.value}>{battery}%</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"#f5f5f5",
  padding:20
},

title:{
  fontSize:26,
  fontWeight:"bold",
  marginBottom:20
},

section:{
  fontSize:18,
  fontWeight:"bold",
  marginTop:20,
  marginBottom:10
},

alertBanner:{
  backgroundColor:"#ff3b30",
  padding:20,
  borderRadius:12,
  marginBottom:20
},

alertTitle:{
  color:"white",
  fontSize:20,
  fontWeight:"bold",
  marginBottom:10
},

alertText:{
  color:"white",
  fontSize:16
},

emergencyButton:{
  backgroundColor:"white",
  padding:12,
  borderRadius:10,
  marginTop:15
},

emergencyText:{
  color:"#ff3b30",
  fontWeight:"bold",
  textAlign:"center"
},

riskCard:{
  backgroundColor:"#2ecc71",
  padding:20,
  borderRadius:12,
  marginBottom:10
},

riskValue:{
  fontSize:26,
  fontWeight:"bold",
  color:"white"
},

cardTitle:{
  fontSize:16
},

card:{
  backgroundColor:"white",
  padding:20,
  borderRadius:12,
  marginBottom:10
},

value:{
  fontSize:22,
  fontWeight:"bold"
},

status:{
  fontSize:18,
  fontWeight:"bold",
  color:"#2ecc71"
}

});