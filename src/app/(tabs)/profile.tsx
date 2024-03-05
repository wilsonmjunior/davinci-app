import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "@/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingTop: 32,
          paddingHorizontal: 16,
          gap: 16,
        }}
      >
        <Feather name="upload" size={24} color={theme.colors.white} />
        <Feather name="settings" size={24} color={theme.colors.white} />
      </View>

      <View style={{ alignItems: "center", paddingTop: 68 }}>
        <Image
          source={{ uri: "https://github.com/wilsonmjunior.png" }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 32,
            fontFamily: theme.fontFamily.medium,
          }}
        >
          Wilson Matokanovic
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Ionicons
          name="logo-pinterest"
          size={18}
          color={theme.colors.gray[600]}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: theme.fontFamily.medium,
            marginLeft: 8,
            color: theme.colors.gray[600],
          }}
        >
          wilsonmatokanovic
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 32,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
