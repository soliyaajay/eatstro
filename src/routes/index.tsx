// ---------- Imports ---------- //
import React from 'react'
import { Alert, Animated, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import second, { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import TabBar from '../components/bars/TabBar'
import GlobalStyles from '../theme/GlobalStyles'
import Profile from '../screens/Profile'
import Orders from '../screens/Orders'
import Favourite from '../screens/Favourite'
import SvgUri from 'react-native-svg-uri'
import Icons from '../common/Icons'
import { scale } from 'react-native-size-matters'
import { Colors } from '../common/Colors'

// ---------- Global Variables Declaration ---------- //
// ---------- App Navigation Routes ---------- //
const AppRoutes = () => {
    // ---------- App Navigation Routes Render---------- //
    // ---------- Variables Declaration---------- //
    const Stack = createStackNavigator()
    // ---------- Function Declaration---------- //
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='BottomTab' component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// ---------- BottomTabBar ---------- //
const BottomTab = () => {
    return (
        <CurvedBottomBar.Navigator
            tabBar={TabBar}
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
            height={scale(70)}
            circleWidth={scale(65)}
            bgColor={Colors.White}
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={GlobalStyles.btnCircle}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                        onPress={() => navigate(selectedTab)}>
                        <SvgUri source={Icons.Cart} />
                    </TouchableOpacity>
                </Animated.View>
            )}>
            <CurvedBottomBar.Screen name='Home' component={Home} position="LEFT" />
            <CurvedBottomBar.Screen name='Favourite' component={Favourite} position="LEFT" />
            <CurvedBottomBar.Screen name='Cart' component={Orders} position="CENTER" />
            <CurvedBottomBar.Screen name='Orders' component={Orders} position="RIGHT" />
            <CurvedBottomBar.Screen name='Profile' component={Profile} position="RIGHT" />
        </CurvedBottomBar.Navigator>
    )
}
export default AppRoutes