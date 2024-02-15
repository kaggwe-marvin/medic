import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import FeedCard from "../../../components/FeedCard";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase.from("posts").select("*");

        if (error) {
          throw error;
        }

        // Append storage URL to each image_url
        const postsWithStorageURL = data.map((post) => ({
          ...post,
          image_url: `https://ipfndhlinezfozzkiuke.supabase.co/storage/v1/object/public/avatars/${post.image_url}`,
        }));

        setPosts(postsWithStorageURL);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollView>
      <View>
        <VirtualizedList
          data={posts}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <FeedCard {...item} />}
          getItemCount={() => posts.length}
          getItem={(data, index) => data[index]} // Add this line to provide item data
        />
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
