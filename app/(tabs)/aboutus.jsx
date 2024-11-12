import {Text, View, ScrollView } from 'react-native'
import React from 'react'

const aboutus = () => {
  return (
    <View className='flex-1 items-center bg-gray-300 px-4'>
        <Text 
            className='text-gray-600 text-3xl font-rbold mt-4' 
            style={{
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            }}
        >
            TRIP TO TRIP
        </Text>

        <Text className='text-gray-900 text-2xl font-rmedium mr-48 mt-12'>About us.</Text>
        <Text className='text-xl ml-4 mr-4 mt-6'>Trip to Thrift was born out of a passion for sustainable living and a love for the thrill of the hunt. Our team believes that fashion shouldn't have to break the bank or harm the planet. We're on a mission to make thrift shopping accessible, fun, and rewarding for everyone.</Text>
    </View>

    )
}

export default aboutus
