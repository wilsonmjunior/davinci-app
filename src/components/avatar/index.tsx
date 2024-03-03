import { Image, ImageProps, StyleSheet } from "react-native";

import { theme } from "@/theme";

type AvatarProps = ImageProps & {
  selected: boolean;
};

export function Avatar({ selected, ...othersProps }: AvatarProps) {
  return (
    <Image
      style={[styles.image, selected && styles.selected]}
      {...othersProps}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
});
