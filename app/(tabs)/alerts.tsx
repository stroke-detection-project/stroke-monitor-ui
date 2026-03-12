import { View, Text, StyleSheet } from "react-native";

export default function Alerts(){

return(

<View style={styles.container}>

<Text style={styles.title}>Emergency Alerts</Text>

<View style={styles.alert}>
<Text style={styles.alertText}>
No active alerts
</Text>
</View>

<View style={styles.card}>
<Text>Last Event</Text>
<Text>Normal monitoring</Text>
</View>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:20
},

alert:{
backgroundColor:"#2ecc71",
padding:20,
borderRadius:10,
marginBottom:20
},

alertText:{
color:"white",
fontWeight:"bold"
},

card:{
backgroundColor:"white",
padding:20,
borderRadius:10
}

});