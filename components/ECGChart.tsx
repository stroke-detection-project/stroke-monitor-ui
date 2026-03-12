import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function ECGChart() {

const [data,setData] = useState<number[]>([0]);

useEffect(()=>{

const interval = setInterval(()=>{

setData(prev => {

const newPoint = Math.sin(Date.now()/200) * 20 + Math.random()*5;

return [...prev.slice(-30), newPoint];

});

},100);

return ()=>clearInterval(interval);

},[]);

return(

<LineChart
data={{
labels:[],
datasets:[{data}]
}}
width={screenWidth-30}
height={150}
withDots={false}
withInnerLines={false}
withOuterLines={false}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
color:(opacity=1)=>`rgba(0,255,150,${opacity})`,
strokeWidth:2
}}
bezier
/>

);

}