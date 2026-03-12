import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Vitals() {

const heartRateData = {
  labels: ["1","2","3","4","5","6"],
  datasets: [
    { data: [78,80,79,82,81,83] }
  ]
};

const spo2Data = {
  labels: ["1","2","3","4","5","6"],
  datasets: [
    { data: [97,96,98,97,97,96] }
  ]
};

return(

<ScrollView style={styles.container}>

<Text style={styles.title}>Live Vitals</Text>

<View style={styles.card}>
<Text style={styles.cardTitle}>ECG Status</Text>
<Text style={styles.value}>Normal Rhythm</Text>
</View>

<View style={styles.card}>
<Text style={styles.cardTitle}>PPG Pulse Wave</Text>
<Text style={styles.value}>Stable</Text>
</View>

<View style={styles.card}>
<Text style={styles.cardTitle}>Movement Sensor</Text>
<Text style={styles.value}>No abnormal gait</Text>
</View>

<Text style={styles.section}>Heart Rate Chart</Text>

<LineChart
data={heartRateData}
width={screenWidth-30}
height={220}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
color:(opacity=1)=>`rgba(46,204,113,${opacity})`
}}
/>

<Text style={styles.section}>SpO₂ Chart</Text>

<LineChart
data={spo2Data}
width={screenWidth-30}
height={220}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
color:(opacity=1)=>`rgba(52,152,219,${opacity})`
}}
/>

</ScrollView>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:15,
backgroundColor:"#f5f5f5"
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:20
},

section:{
fontSize:18,
fontWeight:"bold",
marginTop:20,
marginBottom:10
},

card:{
backgroundColor:"white",
padding:20,
borderRadius:12,
marginBottom:10
},

cardTitle:{
fontSize:16
},

value:{
fontSize:20,
fontWeight:"bold"
}

});