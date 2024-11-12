import { View, Text, ScrollView, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { images } from '../../constants';

const AddToCart = () => {
  const router = useRouter();

  const handleAddToCart = () => {
    Alert.alert('Thank you for shopping!', 'Item has been added to your cart.');
  };

  const handlePress = (item) => {
    router.push('../item');
  };

  return (
    <ScrollView
      className="flex-1 bg-gray-950 px-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex items-center mt-4 rounded-xl p-1">
        <Text className="text-gray-100 text-center text-2xl font-rmedium">
          Recommended Items
        </Text>

        <TextInput
          className='p-2 w-full rounded-lg mt-6 bg-gray-300'
          placeholder="Search..."
          placeholderTextColor="#555"
          style={{ fontSize: 16 }}
        />

        <View className="flex-row mt-8">
          <TouchableOpacity onPress={() => handlePress('Adidas Socks')}>
            <View className="mr-6">
              <Image source={images.socks} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Adidas Socks</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$15</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">8pcs available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Cool Nike Shoes')}>
            <View>
              <Image source={images.shoes3} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Cool Nike Shoes</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$65</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">3pcs available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row mt-8">
          <TouchableOpacity onPress={() => handlePress('Nike Bag')}>
            <View className="mr-6">
              <Image source={images.nikebag} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Nike Bag</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$25</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">5pcs available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Nike Black Cap')}>
            <View>
              <Image source={images.cap} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Nike Black Cap</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$35</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">1pc available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row mt-8 mb-4">
          <TouchableOpacity onPress={() => handlePress('Blue Nike Shoes')}>
            <View className="mr-6">
              <Image source={images.shoes2} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Blue Nike Shoes</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$55</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">1pc available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress('Classic Cap')}>
            <View>
              <Image source={images.cap2} className="w-36 h-28 rounded-xl" />
              <Text className="text-gray-100 text-center text-lg font-rmedium mt-3">Classic Cap</Text>
              <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">$30</Text>
              <Text className="text-black text-center text-base bg-gray-300 rounded-full mt-3">5pcs available</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <Text className="text-gray-100 text-center text-base bg-gray-800 rounded-full mt-3">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddToCart;
