import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';


const CreateAppeal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Submit the appeal here
    console.log('Appeal submitted:', title, description);
    onClose();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create Blood Appeal</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
      />
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Description"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CreateAppeal;