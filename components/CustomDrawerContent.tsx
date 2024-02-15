import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

export default function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();

  const doLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#dde3fe" }}>
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/129196464?v=4",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#5363df",
            }}>
            {" "}
            Dummy user
          </Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Logout"} onPress={doLogout} />
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}>
        <Text>Copyright 2023 Ministry of Health </Text>
      </View>
    </View>
  );
}
