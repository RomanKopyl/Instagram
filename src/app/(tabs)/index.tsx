import React from 'react';
import { FlatList } from 'react-native';
import posts from '~/assets/data/post.json';
import PostListItem from '~/src/components/PostListItem';

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
