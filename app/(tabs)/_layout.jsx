import { Text, View, Image } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    color = focused ? '#1877F2' : '#9CA3AF';
    return (
        <View>
            <Image
                source={icon}
                className="w-5 h-5"
                tintColor={color}
                resizeMode="contain"
            />
        </View>
    )
}

// const TabsLayout = () => {   
//     return (
//         <View>
//             <Image
//                 source={ }
//             />
//         </View>
//     )
// }

const TabLayout = () => {
    return (    
            <Tabs
                screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#F5F5F5',
                    paddingTop: 5,
                    paddingBottom: 2
                },
            }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.homeIcon}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1877F2' : '#9CA3AF', fontSize: 12 }}>
                                Home
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="aboutus"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.aboutUsIcon}
                                color={color}
                                name="Aboutus"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1877F2' : '#9CA3AF', fontSize: 12 }}>
                                About Us
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="addToCart"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.cartIcon}
                                color={color}
                                name="addToCart"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1877F2' : '#9CA3AF', fontSize: 12 }}>
                                Add To Cart
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.userIcon}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1877F2' : '#9CA3AF', fontSize: 12 }}>
                                Profile
                            </Text>
                        ),
                    }}
                />
            </Tabs>

    )
}

export default TabLayout
