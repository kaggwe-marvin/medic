import {
  View,
  Text,
  ScrollView,
  FlatList,
  VirtualizedList,
} from "react-native";
import React from "react";
import data from "../../../components/lib/mockdata";
import FeedCard from "../../../components/FeedCard";

const Page = () => {
  return (
    <ScrollView>
      <View>
        <VirtualizedList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeedCard {...item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
