import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function makeIconRender(name: any) {
  return ({ color, size }: any) => (
    <Ionicons name={name} color={color} size={size} />
  );
}

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(drawer)"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: makeIconRender("home"),
        }}
      />

      
      <Tabs.Screen
        name="post"
        options={{
          tabBarLabel: "Post",
          tabBarIcon: makeIconRender("add-circle"),
        }}
      />
      
    </Tabs>
  );
};

export default Layout;
