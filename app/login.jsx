import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

export default function Registration() {

  return (
    <View className="flex-1 bg-gray-950 items-center justify-center p-4">
      <Text className="text-3xl font-rblack text-gray-300 mb-10">Login</Text>

      <TextInput 
        placeholder="Email"
        placeholderTextColor="#A3A3A3"
        keyboardType="email-address"
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-full"
      />

      <TextInput 
        placeholder="Password"
        placeholderTextColor="#A3A3A3"
        secureTextEntry
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-full"
      />

      <Link href="/home" className="w-full p-4 mt-2 bg-gray-300 rounded-full text-center">
        <Text className="text-gray-950 text-xl font-rmedium">Login</Text>
      </Link>

      <Link href="/registration" className="mt-6">
        <Text className="text-gray-300 text-lg text-center">Already have an account? Sign Up</Text>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}
