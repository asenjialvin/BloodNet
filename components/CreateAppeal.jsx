import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CustomButton, FormField } from "./";

const CreateAppeal = ({ onClose, onAppealCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [county, setCounty] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [compatibleBloodGroups, setCompatibleBloodGroups] = useState([]);
  const [bloodUnitsRequired, setBloodUnitsRequired] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleBloodGroupChange = (selectedBloodGroup) => {
    setBloodGroup(selectedBloodGroup);
    const compatibleGroups = getCompatibleBloodGroups(selectedBloodGroup);
    setCompatibleBloodGroups(compatibleGroups);
  };

  const getCompatibleBloodGroups = (selectedBloodGroup) => {
    const compatibility = {
      'A+': ['A+', 'A-', 'O+', 'O-'],
      'A-': ['A-', 'O-'],
      'B+': ['B+', 'B-', 'O+', 'O-'],
      'B-': ['B-', 'O-'],
      'AB+': ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
      'AB-': ['AB-', 'A-', 'B-', 'O-'],
      'O+': ['O+', 'O-'],
      'O-': ['O-']
    };
    return compatibility[selectedBloodGroup] || [];
  };

  const handleSubmit = async () => {
    try {
      const appeal = {
        title,
        description,
        county,
        hospital,
        bloodGroup,
        compatibleBloodGroups,
        bloodUnitsRequired,
        name,
        phoneNumber,
      };
      await createAppeal(appeal);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Blood Appeal</Text>
      
      <Picker
        selectedValue={county}
        onValueChange={(value) => setCounty(value)}
        style={[styles.picker, { borderWidth: 1, borderColor: 'black', width: '100%' }]}
      >
        <Picker.Item label="Select County" value="" />
        <Picker.Item label="Nairobi" value="Nairobi" />
        <Picker.Item label="Mombasa" value="Mombasa" />
      </Picker>

      <FormField
        title="Hospital"
        value={hospital}
        handleChangeText={(e) => setHospital(e)}
        otherStyles={styles.input}
      />

      <Picker
        selectedValue={bloodGroup}
        onValueChange={handleBloodGroupChange}
        style={[styles.picker, { borderWidth: 1, borderColor: 'black', width: '100%' }]}
      >
        <Picker.Item label="Select Blood Group" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
      </Picker>

      <Text style={ styles.text}>
        Compatible Blood Groups: {compatibleBloodGroups.join(', ')}
      </Text>

      <FormField
        title="Number of Blood Units Required"
        value={bloodUnitsRequired}
        handleChangeText={(e) => setBloodUnitsRequired(e)}
        otherStyles={styles.input}
      />
      <FormField
        title="Name"
        value={name}
        handleChangeText={(e) => setName(e)}
        otherStyles={styles.input}
      />
      <FormField
        title="Phone Number"
        value={phoneNumber}
        handleChangeText={(e) => setPhoneNumber(e)}
        otherStyles={styles.input}
      />

      <CustomButton
          title="Submit"
          handlePress={handleSubmit}
          containerStyles="mt-7 w-full"
          isLoading={false}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', 
    padding: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 20, 
  },
  picker: {
    width: 250, 
    height: 50,
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 20, 
  },
  input: {
    width: 250, 
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20, 
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20, 
  },
});

export default CreateAppeal;
