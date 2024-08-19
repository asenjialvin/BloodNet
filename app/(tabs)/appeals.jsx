import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getAllAppeals } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import { AppealCard } from '../../components';
import { images } from '../../constants';
import CreateAppeal from '../../components/CreateAppeal';

const Appeals = () => {
  const navigation = useNavigation();
  const { data: appeals } = useAppwrite(getAllAppeals);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateAppeal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <View className="flex-1 items-center justify-center">
        <View className="flex justify-between items-center flex-column mb-6">
          <Image
            source={images.logoSmall}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={handleCreateAppeal}
            className="bg-red-500 p-4 rounded-full flex-row items-center"
          >
            <Ionicons name="add-circle" size={32} color="white" />
            <Text className="text-white ml-2 text-lg">Create Blood Appeal</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-lg font-pmedium text-black-100 mb-4">
          Blood Appeals
        </Text>

        <FlatList
          data={appeals}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <AppealCard
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              creator={item.creator.username}
            />
          )}
          contentContainerStyle={{ paddingBottom: 80, alignItems: 'center' }}
        />

        <Modal
          visible={modalVisible}
          onRequestClose={handleCloseModal}
          animationType="slide"
        >
          <CreateAppeal onClose={handleCloseModal} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Appeals;