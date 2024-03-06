import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { theme } from "@/theme";

export type PostProps = {
  id: number;
  title: string;
  image: string;
};

export function Post({ title, image }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, []);

  return (
    <View>
      <Image source={{ uri: image }} style={[styles.image, { aspectRatio }]} />

      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 22,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    maxWidth: "90%",
  },
});
