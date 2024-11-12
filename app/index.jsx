import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-gray-950 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
          <View className="w-full justify-center items-center min-h-screen h-[85px] px-4">
            <Text className="text-4xl font-rblack text-gray-100 mb-12">TRIP TO TRIP</Text>

            <Image
              source={images.appLogo}
              className="w-[200px] h-[200px] pt-10"
              resizeMode='contain'
            />

            <Text className="text-gray-100 text-xl font-rbold text-center mt-7">
              A versatile online shop app with diverse products, easy browsing, and secure checkout
              </Text>

              <CustomButton
                title="Get Started"
                handlePress={()=> router.push('/login')}
                containerStyles="w-full mt-10"
              >

              </CustomButton>

          </View>
        </ScrollView>

        <StatusBar style="light" />
      </SafeAreaView>
  );
}
