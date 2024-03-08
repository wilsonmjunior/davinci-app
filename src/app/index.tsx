import { router } from "expo-router";
import { Skeleton } from "moti/skeleton";
import { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, {
  SlideInDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { theme } from "@/theme";

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  const contentDisplay = useSharedValue(0);

  const dimensions = useWindowDimensions();

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value },
    ],
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    display: contentDisplay.value === 1 ? "flex" : "none",
  }));

  function onEndSplash() {
    setTimeout(() => {
      router.push("/(tabs)");
    }, 2000);
  }

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50, undefined, () => (contentDisplay.value = 1)),
            withTiming(-dimensions.height, { duration: 400 }),
          );

          runOnJS(onEndSplash)();
        }
      }),
    );
  }

  function boxes(column: "left" | "right") {
    const rest = column === "left" ? 0 : 1;

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === "left" ? 0 : 1) ? 200 : 300;

        return (
          <Animated.View key={index} style={[styles.box, { height }]}>
            <Skeleton
              colors={[
                theme.colors.gray[600],
                theme.colors.gray[700],
                theme.colors.gray[600],
              ]}
              width="100%"
              height={height}
            />
          </Animated.View>
        );
      });
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/logo.png")}
        style={[styles.logo, logoAnimatedStyle]}
      />

      <Animated.View
        style={[styles.content, contentAnimatedStyle]}
        entering={SlideInDown.duration(700)}
      >
        <View style={styles.boxes}>
          <View style={styles.column}>{boxes("left")}</View>
          <View style={styles.column}>{boxes("right")}</View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  logo: {
    width: 64,
    height: 64,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  boxes: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  box: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: theme.colors.gray[600],
  },
  column: {
    flex: 1,
    gap: 12,
  },
});
