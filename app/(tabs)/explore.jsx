import React from 'react';
import { View } from 'react-native';
import GoogleMapView from '../../components/GoogleMapView';
import { SearchInput } from '../../components';


const Explore = () => (
  <View style={{marginTop:50,padding: 20}}>

    <SearchInput />

    <GoogleMapView />
  </View>
);

export default Explore;