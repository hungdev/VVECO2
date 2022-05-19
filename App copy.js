import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import {
  CameraDeviceFormat,
  CameraRuntimeError,
  FrameProcessorPerformanceSuggestion,
  PhotoFile,
  sortFormats,
  useCameraDevices,
  useFrameProcessor,
  VideoFile,
  Camera,
  frameRateIncluded,
  CameraPermissionStatus
} from 'react-native-vision-camera';

export default function App() {
  const devices = useCameraDevices();
  const device = devices.back;
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('not-determined');

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  // useEffect(() => {
  //   if (cameraPermissionStatus === 'authorized' ) {

  //   }
  // }, [cameraPermissionStatus, microphonePermissionStatus, navigation]);


  console.log('device', device);

  if (device == null) return <Text>aa</Text>;
  return (
    <View style={{ height: 500, width: 300, borderWidth: 1, borderColor: 'red' }}>
      {cameraPermissionStatus === 'authorized' &&
        <Camera
          style={{ width: 300, height: 300 }}
          device={device}
          isActive={true}
        />}
    </View>
  );
}