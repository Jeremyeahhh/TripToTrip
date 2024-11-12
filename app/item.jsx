import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons'
import { images } from '../constants'

const Item = () => {

  const handlePress = () => {
    Alert.alert("Thank you for shopping!", "Your purchase has been successful.");
  };

  return (
    <View>
      <View className='flex items-center'>
        <Image
            source={images.nikebag}
            className='w-72 h-56 rounded-xl'
        />
      </View>
      
      <Text className='text-gray-900 text-center text-2xl font-rmedium mt-3'>Nike Bag</Text>

      <TouchableOpacity onPress={handlePress}>
        <Text className='text-gray-100 text-center text-lg bg-gray-800 rounded-full mt-3 p-2'>$25</Text>
      </TouchableOpacity>

      <Text className='text-black text-center text-base bg-gray-300 rounded-full mt-3 p-2'>5pcs available</Text>
    </View>
  );
};

export default Item;
