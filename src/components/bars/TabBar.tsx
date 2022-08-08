// ---------- Imports ---------- //
import React, { } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { Colors } from '../../common/Colors'
import { Images } from '../../common/Images'
import TextInputComponent from '../TextInputComponent'
import { Strings } from '../../common/Strings'
import { FontSize } from '../../common/FontSize'
import SvgUri from 'react-native-svg-uri'
import Icons from '../../common/Icons'
// ---------- TabBar Screen Functional ---------- //
// ---------- TabBar Interface Props ---------- //
interface TabBarProps {
    props: any,
    onPress: any,
    extraStyle: any,
    routeName: string,
    selectedTab: string,
    navigate: any
}

const TabBar = (props: TabBarProps) => {
    // ---------- Variables Declaration ---------- //
    // ---------- Function Declaration ---------- //
    // ---------- Render Icon Component  ---------- //
    const _renderIcon = (routeName: string, selectedTab: string) => {
        let icon
        switch (routeName) {
            case 'Home':
                icon = routeName === selectedTab ? Icons.Home : Icons.HomeInActive
                break;
            case 'Favourite':
                icon = routeName === selectedTab ? Icons.HeartActive : Icons.HeartInActive
                break;
            case 'Orders':
                icon = routeName === selectedTab ? Icons.OrdersActive : Icons.Orders
                break;
            case 'Profile':
                icon = Images.Profile
                break;
        }
        return (
            <View style={styles.iconContainer}>
                {routeName === 'Profile' ? <Image style={styles.profileImg} source={icon} /> : <SvgUri source={icon} height={scale(22)} width={scale(22)} />}
                <Text style={[styles.tabText, { color: routeName === selectedTab ? Colors.Main : Colors.DarkGrey }]}>{routeName}</Text>
                <View style={routeName === selectedTab ? styles.dot : styles.dotInActive} />
            </View>
        )
    }
    // ---------- TabBar Screen UI (Render Part) ---------- //
    return (
        <View style={[styles.container, props.extraStyle,]}>
            <TouchableOpacity style={styles.imageBtn} onPress={() => props.navigate(props.routeName)} activeOpacity={0.5}>
                {_renderIcon(props.routeName, props.selectedTab)}
            </TouchableOpacity>
        </View>
    )
}
// ---------- TabBar Screen StyleSheet ---------- //
const styles = StyleSheet.create({
    container: {
    },
    imageBtn: {
        alignSelf: 'center',
    },
    profileImg: {
        height: scale(20),
        width: scale(20),
        resizeMode: 'contain',
        borderRadius: scale(10),
    },
    iconContainer: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: FontSize.Eleven,
        lineHeight: scale(14),
        marginTop: scale(5),
    },
    dot: {
        height: scale(5),
        width: scale(5),
        backgroundColor: Colors.Main,
        marginTop: scale(5),
        alignSelf: 'center',
        borderRadius: scale(5),
    },
    dotInActive: {
        height: scale(5),
        width: scale(5),
        marginTop: scale(5),
    }
})
export default TabBar