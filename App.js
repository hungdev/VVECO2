import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import GeolocationCommunity from '@react-native-community/geolocation';
import { hasLocationPermission } from './location-permission';

export default function App() {
  const mapRef = React.useRef(null);
  const position = {
    latitude: 21.0294498,
    longitude: 105.8544441,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [markerPosition, setMarkerPosition] = useState(position);


  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();
    console.tron.log('hasPermission', hasPermission);
    if (!hasPermission) {
      return;
    }

    GeolocationCommunity.getCurrentPosition(info => {
      console.tron.log('info', info);
      // animateToRegionMap({
      //   latitude: info?.coords?.latitude,
      //   longitude: info?.coords?.longitude,
      // });

      mapRef.current.animateToRegion(
        {
          // latitudeDelta: 0.005,
          // longitudeDelta: 0.001,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: info?.coords?.latitude,
          longitude: info?.coords?.longitude,
        },
        350
      );
      setMarkerPosition({
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.001,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude: info?.coords?.latitude,
        longitude: info?.coords?.longitude,
      });
      // setMarkers([{
      //   title: 'Ceeee',
      //   latitude: info?.coords?.latitude,
      //   longitude: info?.coords?.longitude,
      // }])
    }
    );
  };

  useEffect(() => {
    getLocation();
  });


  const onMoveMarker = () => {
    mapRef.current.animateToRegion(
      {
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.001,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude: 21.03029584556962,
        longitude: 105.7879823133722
      },
      350
    );
    setMarkerPosition({
      // latitudeDelta: 0.005,
      // longitudeDelta: 0.001,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      latitude: 21.03029584556962,
      longitude: 105.7879823133722
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        mapType={'standard'}
        style={{ height: '100%', width: '100%', flex: 1, }}
        initialRegion={position}
        showsUserLocation
        userLocationPriority='high'
        userLocationUpdateInterval={5000}
        userLocationFastestInterval={5000}
        showsMyLocationButton={true}
        showsPointsOfInterest
        showsCompass
        showsScale
        zoomEnabled
        showsIndoorLevelPicker
        rotateEnabled
        scrollEnabled
      >
        <Marker
          style={{ width: 32, height: 42 }}
          // image={Images.marker}
          coordinate={markerPosition}
          pinColor={'red'}
          onSelect={e => console.tron.log('onSelect', e.nativeEvent)}
          // onDrag={e => onDragMarker(e.nativeEvent)}
          onDragStart={e => console.tron.log('onDragStart', e.nativeEvent)}
          onDragEnd={e => onDragMarker(e.nativeEvent)}
          onPress={e => console.tron.log('onPress', e.nativeEvent)}
          draggable
        >
          <Image source={require('./marker.png')} style={{ width: 32, height: 42 }} />
        </Marker>
      </MapView>
      <TouchableOpacity onPress={onMoveMarker} style={{ position: 'absolute', bottom: 0, left: 0, height: 100, backgroundColor: 'red', width: '100%' }}>
        <Text>Move</Text>
      </TouchableOpacity>
    </View>
  );
}