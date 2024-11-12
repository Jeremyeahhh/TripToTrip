import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-emerald-800 rounded-lg min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
    >
        <Text className={`font-rbold text-lg text-gray-100 ${textStyles}`}>
            {title}
        </Text>

    </TouchableOpacity>
  )
}

export default CustomButton