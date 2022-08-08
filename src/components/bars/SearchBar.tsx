// ---------- Imports ---------- //
import React, { } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { Colors } from '../../common/Colors'
import { Images } from '../../common/Images'
import TextInputComponent from '../TextInputComponent'
import { Strings } from '../../common/Strings'
import { FontSize } from '../../common/FontSize'
import SvgUri from 'react-native-svg-uri'
import Icons from '../../common/Icons'
// ---------- SearchBar Screen Functional ---------- //
// ---------- SearchBar Interface Props ---------- //
interface SearchBarProps {
    onPress: any,
    extraStyle: any,
    onChangeText: any,
    searchValue: any,
    placeholder: any,
    testID:any
}

const SearchBar = (props: SearchBarProps) => {
    // ---------- Variables Declaration ---------- //
    // ---------- SearchBar Screen UI (Render Part) ---------- //
    return (
        <View style={[styles.container, props.extraStyle,]}>
            <TouchableOpacity style={styles.imageBtn} onPress={props.onPress} activeOpacity={0.5} testID={props.testID}>
                {/* <Image source={Images.Search} style={styles.searchImage} /> */}
                <SvgUri source={Icons.Search} />
            </TouchableOpacity>
            <TextInputComponent extraStyle={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.searchValue} placeholderTextColor={Colors.DarkGrey} />
        </View>
    )
}
// ---------- SearchBar Screen StyleSheet ---------- //
const styles = StyleSheet.create({
    container: {
        height: scale(50),
        backgroundColor: Colors.White,
        alignItems: 'center',
        paddingHorizontal: scale(20),
        borderRadius: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: Colors.Black,
        shadowOffset: {
            width: scale(0),
            height: scale(0),
        },
        shadowRadius: scale(5),
        shadowOpacity: scale(0.065),
        elevation: scale(5),
    },
    input: {
        flex: 1,
        paddingStart: scale(5),
        fontSize: FontSize.Fourteen,
    },
    searchImage: {
        height: scale(14),
        width: scale(14),
        resizeMode: 'contain',
        // tintColor: Colors.Main,
    },
    title: {
        fontSize: FontSize.Sixteen,
        color: Colors.White,
        flex: 1,
        textAlign: 'center',
    },
    closeImage: {
        height: scale(16),
        width: scale(16),
        resizeMode: 'contain'
    }
})
export default SearchBar