import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from 'cloudinary-react-native';

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from '~/lib/cloudinary';

export interface PostInterface {
  id: string;
  image: string;
  image_url: string;
  caption: string;
  user: {
    id: string;
    avatar_url: string;
    image_url: string;
    username: string;
  }
}

interface Props {
  post: PostInterface
};


const PostListItem: React.FC<Props> = ({ post }) => {
  const { width } = useWindowDimensions();

  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width));
  
  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));

  return (
    <View className="bg-white">
      {/* Header */}
      <View className='p-2 flex-row items-center gap-2'>
        <AdvancedImage
          cldImg={avatar}
          className='w-12 aspect-square rounded-full'
        />
        <Text className='font-semibold'>
          {post.user?.username}
        </Text>
      </View>

      {/* Content */}
      <AdvancedImage cldImg={image} className='w-full aspect-[4/3]' />

      {/* Icons */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}

export default PostListItem