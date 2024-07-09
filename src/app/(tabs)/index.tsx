import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { supabase } from '~/lib/supabase';
import PostListItem, { PostInterface } from '~/src/components/PostListItem';

export default function FeedScreen() {
  const [posts, setPosts] = useState<PostInterface[] | null>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from('posts')
      .select('*, user:profiles(*)')
      .order('created_at', { ascending: false });
    if (error) {
      Alert.alert('Something went wrong');
    }
    setPosts(data);
    setLoading(false);
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      onRefresh={fetchPosts}
      refreshing={loading}
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