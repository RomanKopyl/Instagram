import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function CreatePost() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className='p-3 items-center flex-1'>
      {/* Image picker */}
      {
        image ?
          <Image
            source={{ uri: image }}
            className='w-52 aspect-[3/4] rounded-lg bg-slate-300'
          />
          :
          <View className='w-52 aspect-[3/4] rounded-lg bg-slate-300' />
      }

      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>Change</Text>

      {/* TextInput for the caption */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder='What is on your mind'
        className='w-full p-3'
      />

      {/* Button */}
      <View className='mt-auto w-full'>
        <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md'>
          <Text className='text-white font-semibold'>Share</Text>
        </Pressable>
      </View>
    </View>
  )
}
