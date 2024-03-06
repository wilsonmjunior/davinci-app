import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Post, PostProps } from "@/components/Post";

type PostsProps = {
  items: PostProps[];
};

export function Posts({ items }: PostsProps) {
  function postsByColumn(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;
    return items
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} {...post} />);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn("left")}</View>
        <View style={styles.column}>{postsByColumn("right")}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
  },
});
