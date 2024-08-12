import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[260px] h-[160px]"
            resizeMode="contain"
          />


          <View className="relative mt-5">
            <Text className="text-3xl text-black font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">BloodNet</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-black mt-7 text-center">
            Your journey as a lifesaver starts here. With BloodNet, you can easily connect with those in need of blood, making a difference when it matters most.
          </Text>

          <Text className="text-sm font-pbold text-black mt-7 text-center">
            How It Works:
          </Text>

          <Text className="text-sm font-pregular text-black mt-7 text-center">
            Find or Donate Blood{"\n"}
            Create or Respond to Blood Appeals{"\n"}
            Locate Nearby Donation Centers{"\n"}
            Learn & Share more on Blood Donation{"\n"}
            Join the Community{"\n"}
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </SafeAreaView>
  );
};

export default Welcome;
