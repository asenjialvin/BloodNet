import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { CustomButton, FormField } from "../../components";

const CreateAppeal = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    thumbnail: null,
    video: null,
  });

  // Other logic for form handling...

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 16 }}>
          Create Blood Appeal
        </Text>
        {/* Form fields and buttons */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAppeal;
