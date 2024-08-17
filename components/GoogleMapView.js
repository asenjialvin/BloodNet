import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMapView = () => {
  return (
    <View style={{marginTop:50,borderRadius:20,overflow: 'hidden'}}>
      <MapView
        style={{
          width:Dimensions.get('screen').width*0.9,
          height:Dimensions.get('screen').height*0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: -1.285790,
          longitude: 36.820030,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default GoogleMapView;