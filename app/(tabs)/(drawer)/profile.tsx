import { View, Text } from "react-native";
import React from "react";
import Profile from "../../../components/Profile";

const Page = () => {
  const user = {
    username: "Dummy User",
    bio: "Exploring the world one code at a time.",
    profileImage: "https://avatars.githubusercontent.com/u/129196464?v=4",
  };
  return (
    <View>
      <Profile {...user} />
    </View>
  );
};

export default Page;
