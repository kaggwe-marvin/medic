import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import Avatar from "./Avator";

export default function AddPost() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function updatePost({
    content,
    image_url,
  }: {
    content: string;
    image_url: string;
  }) {
    try {
      const updates = {
        content,
        image_url,
        created_at: new Date(),
      };

      const { error } = await supabase.from("posts").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}></View>
      <View style={styles.verticallySpaced}>
        <Input
          label="content"
          value={content || ""}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <View>
        <Avatar
          size={200}
          url={imageUrl}
          onUpload={(url: string) => {
            setImageUrl(url);
            updatePost({ content, image_url: url });
          }}
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Loading ..." : "Post"}
          onPress={() => updatePost({ content, image_url: imageUrl })}
          disabled={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
