import { SafeAreaView, ScrollView, Text, Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import ECGChart from "../../components/ECGChart";

const width = Dimensions.get("window").width;

export default function Vitals(){

const heartRate=82;
const spo2=97;

const heartRateData={
labels:["1","2","3","4","5","6"],
datasets:[{data:[78,80,79,82,81,83]}]
}

const spo2Data={
labels:["1","2","3","4","5","6"],
datasets:[{data:[97,96,98,97,97,96]}]
}

return(

<SafeAreaView style={{flex:1}}>

<ScrollView
contentContainerStyle={{padding:20,paddingBottom:120}}
>

<Text style={styles.title}>Live Vitals</Text>

<View style={styles.card}>
    <Text style={{fontSize:22,fontWeight:"bold",marginTop:20}}>
ECG Waveform
</Text>

<ECGChart/>
<Text>Heart Rate</Text>
<Text style={styles.value}>{heartRate} bpm</Text>
</View>

<LineChart
data={heartRateData}
width={width-30}
height={220}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
color:(opacity=1)=>`rgba(46,204,113,${opacity})`
}}
/>

<View style={styles.card}>
<Text>SpO₂</Text>
<Text style={styles.value}>{spo2}%</Text>
</View>

<LineChart
data={spo2Data}
width={width-30}
height={220}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
color:(opacity=1)=>`rgba(52,152,219,${opacity})`
}}
/>

</ScrollView>

</SafeAreaView>

)
}

const styles=StyleSheet.create({

title:{fontSize:24,fontWeight:"bold",marginBottom:20},

card:{
backgroundColor:"white",
padding:20,
borderRadius:12,
marginBottom:10
},

value:{
fontSize:22,
fontWeight:"bold"
}

})