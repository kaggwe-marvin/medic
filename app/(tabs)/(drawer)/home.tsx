import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  VirtualizedList,
} from "react-native";
import React from "react";
import FeedCard from "../../../components/FeedCard";
import data from "../../../components/lib/mockdata";

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
