import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function History(){

return(
    <ScrollView
contentContainerStyle={{padding:20,paddingBottom:120}}
>

<View style={styles.container}>

<Text style={styles.title}>Health History</Text>

<View style={styles.card}>
<Text>Heart Rate Trend</Text>
<Text>Last 24h stable</Text>
</View>

<View style={styles.card}>
<Text>SpO₂ Trend</Text>
<Text>Average 96-98%</Text>
</View>

</View>
</ScrollView>

)

}

const styles=StyleSheet.create({

container:{flex:1,padding:20},

title:{fontSize:24,fontWeight:"bold",marginBottom:20},

card:{
backgroundColor:"white",
padding:20,
borderRadius:10,
marginBottom:10
}

})