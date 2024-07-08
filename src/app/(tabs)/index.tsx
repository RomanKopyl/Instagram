import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import posts from '~/assets/data/post.json';
import PostListItem from '~/src/components/PostListItem';

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 10,
    maxWidth: 512,
    width: '100%',
    alignSelf: 'center',
  },
});