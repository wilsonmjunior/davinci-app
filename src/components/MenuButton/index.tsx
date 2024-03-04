import { FontAwesome } from "@expo/vector-icons";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { theme } from "@/theme";

type MenuButtonProps = PressableProps & {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

export function MenuButton({ title, icon, ...othersProps }: MenuButtonProps) {
  return (
    <Pressable style={styles.container} {...othersProps}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fontFamily.medium,
    marginTop: 10,
  },
  icon: {
    padding: 24,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 22,
  },
});
