// /tabs/explore.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GoogleMap, Marker } from 'react-native-maps';
import { useLocation } from '../components/locationService';
import { donationCenters } from '../components/donationCenterData';
import { styles } from '../components/styles';

const Explore = () => {
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [donationCentersNearby, setDonationCentersNearby] = useState([]);
  const [error, setError] = useState(null);

  const fetchDonationCenters = async (lat, lon) => {
    try {
      const response = await fetch(`https://example.com/api/donation-centers?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      setDonationCentersNearby(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://example.com/api/donation-centers?query=${searchQuery}`);
      const data = await response.json();
      setDonationCentersNearby(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (location) {
      fetchDonationCenters(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by city or postal code"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      {location && (
        <GoogleMap
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {donationCentersNearby.map((center) => (
            <Marker
              key={center.id}
              coordinate={{
                latitude: center.latitude,
                longitude: center.longitude,
              }}
              title={center.name}
            />
          ))}
        </GoogleMap>
      )}
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

export default Explore;