import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Alerts(){

return(
    <ScrollView
contentContainerStyle={{padding:20,paddingBottom:120}}
>

<View style={styles.container}>

<Text style={styles.title}>Alerts</Text>

<View style={styles.alert}>
<Text>⚠ No critical alerts</Text>
</View>

</View>
</ScrollView>

)

}

const styles=StyleSheet.create({

container:{flex:1,padding:20},

title:{fontSize:24,fontWeight:"bold"},

alert:{
backgroundColor:"#fff3cd",
padding:20,
borderRadius:10,
marginTop:20
}

})