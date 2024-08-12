import { router } from "expo-router";
import { View, Text, Image } from "react-native";

import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4">
           
      <CustomButton
        title="Create Blood Appeal"
        handlePress={() => router.push("../create/CreateAppeal")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
