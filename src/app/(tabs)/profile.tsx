import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Button from '../../components/Button';
import StyledTextInput from '~/src/components/StyledTextInput';
import { supabase } from '~/lib/supabase';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className='p-3 flex-1'>
      {/* Avatar image picker */}
      {
        image ?
          <Image
            source={{ uri: image }}
            className='w-52 aspect-square self-center rounded-full bg-slate-300'
          />
          :
          <View className='w-52 aspect-square self-center rounded-full bg-slate-300' />
      }
      <Text
        onPress={pickImage}
        className='text-blue-500 font-semibold m-5 text-center'
      >
        Change
      </Text>

      {/* Form */}
      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <StyledTextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />

      {/* Button */}
      <View className="gap-2 mt-auto">
        <Button title="Update profile" />
        <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
}
