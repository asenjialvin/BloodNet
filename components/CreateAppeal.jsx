import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

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

  const handleSubmit = () => {
    const appeal = {
      title,
      description,
      county,
      hospital,
      bloodGroup,
      compatibleBloodGroups,
      bloodUnitsRequired,
      // Don't include name and phoneNumber in the appeal object
    };
    onAppealCreated(appeal);
    onClose();
  };

  const handleBloodGroupChange = (bloodGroup) => {
    setBloodGroup(bloodGroup);
    const compatibleGroups = getCompatibleBloodGroups(bloodGroup);
    setCompatibleBloodGroups(compatibleGroups);
  };

  const getCompatibleBloodGroups = (bloodGroup) => {
    // Implement logic to determine compatible blood groups based on the selected blood group
    // For example:
    switch (bloodGroup) {
      case 'A+':
        return ['A+', 'A-', 'O+', 'O-'];
      case 'A-':
        return ['A-', 'O-'];
      // ...
      default:
        return [];
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create Blood Appeal</Text>
      <Picker
        selectedValue={county}
        onValueChange={(itemValue) => setCounty(itemValue)}
      >
        <Picker.Item label="Select County" value="" />
        <Picker.Item label="County 1" value="County 1" />
        <Picker.Item label="County 2" value="County 2" />
        {/* Add more counties as needed */}
      </Picker>
      <TextInput
        value={hospital}
        onChangeText={(text) => setHospital(text)}
        placeholder="Hospital"
      />
      <Picker
        selectedValue={bloodGroup}
        onValueChange={(itemValue) => handleBloodGroupChange(itemValue)}
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
      <Text>Compatible Blood Groups: {compatibleBloodGroups.join(', ')}</Text>
      <TextInput
        value={bloodUnitsRequired}
        onChangeText={(text) => setBloodUnitsRequired(text)}
        placeholder="Number of Blood Units Required"
      />
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Phone Number"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CreateAppeal;