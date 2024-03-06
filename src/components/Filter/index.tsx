import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import { theme } from "@/theme";

type FilterProps = PressableProps & {
  filter: string;
  selected: boolean;
};

export function Filter({ filter, selected, ...othersProps }: FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...othersProps}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 8,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
});
