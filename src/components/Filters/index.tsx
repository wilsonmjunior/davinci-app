import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Filter } from "@/components/Filter";

type FiltersProps = {
  filters: string[];
  filter: string;
  onChange(value: string): void;
};

export function Filters({ filter, filters, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      horizontal
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 16,
  },
  content: {
    gap: 24,
    paddingHorizontal: 8,
  },
});
