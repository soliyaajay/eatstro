// ---------- Imports ---------- //
import React, { } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { scale } from 'react-native-size-matters'
import SvgUri from 'react-native-svg-uri'
import { Colors } from '../../common/Colors'
import Fonts from '../../common/Fonts'
import { FontSize } from '../../common/FontSize'
import Icons from '../../common/Icons'
import Images from '../../common/Images'
import { Variables } from '../../common/Variables'
import { Container } from '../../styledComponents'

// ---------- FoodItem Functional ---------- //
interface FoodItemProps {
    onPressAdd: any,
    onPressLike: any,
    dataProp: any,
}

const FoodItem = (props: FoodItemProps) => {

    const { cuisineType, desc, dietaryChoice, kitchen, name, price, liked, favoriteCount } = props.dataProp
    const { photo, } = kitchen
    // console.log('props', props);
    // ---------- Variables Declaration ---------- //
    const pepper = [1, 2, 3]
    // ---------- FoodItem UI (Render Part) ---------- //
    return (
        <View style={styles.container}>
            <FastImage style={styles.image} source={{ uri: photo }}>
                <View style={styles.topLikedContainer}>
                    <Text style={styles.likedCountText}>{favoriteCount}</Text>
                    <TouchableOpacity style={styles.likeContainer} onPress={props.onPressLike} activeOpacity={0.5}>
                        <SvgUri height={scale(18)} width={scale(18)} source={liked === true ? Icons.HeartActive : Icons.HeartInActive} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.addBtn} onPress={props.onPressAdd} activeOpacity={0.5}>
                    <Image style={styles.addImg} source={Images.Plus} />
                </TouchableOpacity>
            </FastImage>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomTopContainer}>
                    <Text>{name}</Text>
                    <TouchableOpacity style={styles.paleloBtn}>
                        <SvgUri height={scale(12)} width={scale(12)} source={Icons.Paleo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomMiddleContainer}>
                    <SvgUri height={scale(15)} width={scale(15)} source={Icons.CalorieFire} />
                </View>
                <Text style={styles.descText}>{desc}</Text>
                <View style={styles.bottomLastContainer}>
                    <Text style={styles.priceText}><Text style={styles.currencyText}>$</Text> {price}</Text>
                    <View>
                        <FlatList horizontal data={pepper} renderItem={() => {
                            return (
                                <SvgUri height={scale(15)} width={scale(15)} source={Icons.PepperInActive} />
                            )
                        }} />
                    </View>
                </View>
            </View>
        </View>
    )
}
// ---------- FoodItem StyleSheet ---------- //
const styles = StyleSheet.create({
    container: {
        borderRadius: scale(15),
        backgroundColor: Colors.White,
        shadowColor: Colors.Black,
        shadowOffset: {
            width: scale(3),
            height: scale(3),
        },
        shadowRadius: scale(10),
        shadowOpacity: scale(0.08),
        elevation: scale(5),
        marginVertical: scale(10)
    },
    image: {
        height: scale(125),
        // width: Variables.windowWidth,
        borderRadius: scale(15),
        resizeMode: 'contain',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    topLikedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likedCountText: {
        color: Colors.White,
        fontSize: FontSize.Twelve,
        lineHeight: scale(13),
    },
    likeContainer: {
        borderRadius: scale(20),
        backgroundColor: Colors.White,
        padding: scale(8),
        margin: scale(15),
    },
    addBtn: {
        backgroundColor: Colors.Main,
        padding: scale(8),
        borderTopStartRadius: scale(15),
        borderBottomEndRadius: scale(15),
    },
    addImg: {
        height: scale(20),
        width: scale(20),
        resizeMode: 'contain'
    },
    bottomContainer: {
        padding: scale(15),
    },
    bottomTopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomMiddleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paleloBtn: {
        borderRadius: scale(20),
        borderWidth: scale(2),
        borderColor: Colors.Grey2,
        padding: scale(4),
    },
    descText: {
        color: Colors.Black,
        lineHeight: scale(20),
        fontSize: FontSize.Eleven,
        marginTop: scale(3)
    },
    bottomLastContainer: {
        paddingTop: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceText: {
        color: Colors.Black,
        lineHeight: scale(20),
        fontSize: FontSize.Fifteen,
        fontWeight: '600',
        flex: 1
    },
    currencyText: {
        color: Colors.Black,
        lineHeight: scale(20),
        fontSize: FontSize.Eleven,
        fontWeight: '600',
    }
})
export default FoodItem
