import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const HeaderComponent = () => (
    <View className="flex my-6 px-4 space-y-6">
      <View className="flex justify-between items-center flex-row mb-6">
        <Text className="font-pmedium text-sm text-red-500">Welcome Back</Text>
        <Image source={images.logoSmall} className="w-20 h-20" resizeMode="contain" />
      </View>

      <SearchInput />

      <View className="w-full flex-1 pt-5 pb-8">
        <Text className="text-lg font-pregular text-black-100 mb-3">Latest Posts</Text>
        <Trending posts={latestPosts ?? []} />
      </View>
    </View>
  );

  const EmptyListComponent = () => (
    <EmptyState title="No Videos Found" subtitle="No videos created yet" />
  );

  return (
    <SafeAreaView className="bg-white">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={EmptyListComponent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;