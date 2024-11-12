import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { images } from '../../constants'

const profile = () => {

  const userData = {
    name: 'Jeremiyeah Toring',
    email: 'jeremyeah@example.com',
    address: '123 Main Street, Springfield, USA',
    purchaseHistory: [
      { id: 1, item: 'Adidas Socks', price: '$15', date: '2024-10-05' },
      { id: 2, item: 'Nike Shoes', price: '$65', date: '2024-09-22' },
      { id: 3, item: 'Nike Cap', price: '$35', date: '2024-09-10' },
    ]
  };

  const handleLogout = () => {
    Alert.alert('Logged out', 'You have been logged out successfully.');
  };

  return (
    <ScrollView className="flex-1 bg-gray-950 p-4">


      <View className="bg-gray-800 p-4 rounded-xl mb-6">

        <View className="flex items-center mb-4">
          <Image
            source={images.profilePic}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <Text className="text-gray-300 text-lg">Name: {userData.name}</Text>
        <Text className="text-gray-300 text-lg mt-2">Email: {userData.email}</Text>
        <Text className="text-gray-300 text-lg mt-2">Address: {userData.address}</Text>
      </View>


      <View className="bg-gray-800 p-4 rounded-xl mb-6">
        <Text className="text-gray-100 text-2xl font-semibold mb-2">Purchase History</Text>
        {userData.purchaseHistory.length > 0 ? (
          userData.purchaseHistory.map((purchase) => (
            <View key={purchase.id} className="bg-gray-700 p-2 rounded-lg mb-3">
              <Text className="text-gray-300 text-base">Item: {purchase.item}</Text>
              <Text className="text-gray-300 text-base">Price: {purchase.price}</Text>
              <Text className="text-gray-300 text-base">Date: {purchase.date}</Text>
            </View>
          ))
        ) : (
          <Text className="text-gray-300">No purchase history available.</Text>
        )}
      </View>


      <View className="flex items-center mb-8">
        <TouchableOpacity onPress={handleLogout} className="bg-emerald-800 p-3 rounded-lg w-full">
          <Text className="text-white text-center text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default profile;
