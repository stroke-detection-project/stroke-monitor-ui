import { View, Text, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function FaceScan() {

  const [permission, requestPermission] = useCameraPermissions();
  const [cameraVisible, setCameraVisible] = useState(false);

  const openCamera = async () => {

    if (!permission?.granted) {
      await requestPermission();
    }

    setCameraVisible(true);
  };

  const closeCamera = () => {
    setCameraVisible(false);
  };

  if (cameraVisible) {
    return (
      <View style={{ flex: 1 }}>
        <CameraView style={{ flex: 1 }} facing="front" />

        <Button
          title="Close Camera"
          onPress={closeCamera}
        />
      </View>
    );
  }

  return (

    <View style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Face Droop Detection
      </Text>

      <Text>
        Camera analyzes facial symmetry for stroke symptoms.
      </Text>

      <Button
        title="Start Face Scan"
        onPress={openCamera}
      />

    </View>

  );
}