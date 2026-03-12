import { View, Text, StyleSheet } from "react-native";

export default function History(){

return(

<View style={styles.container}>

<Text style={styles.title}>Health History</Text>

<View style={styles.card}>
<Text>Heart Rate Trend</Text>
<Text>Last 24 hours stable</Text>
</View>

<View style={styles.card}>
<Text>SpO₂ Trend</Text>
<Text>Average 96-98%</Text>
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

card:{
backgroundColor:"white",
padding:20,
borderRadius:10,
marginBottom:10
}

});