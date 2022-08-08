// ---------- Imports ---------- //
import React, { } from 'react'
import { ActivityIndicator, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../common/Colors'
import { FontSize } from '../common/FontSize'
import Modal from 'react-native-modal'
import { Variables } from '../common/Variables'
import { scale } from 'react-native-size-matters'
import Strings from '../common/Strings'
// ---------- Loader Functional ---------- //

interface LoaderProps {
    extraStyle: any,
    visible: boolean,
}

const Loader = (props: LoaderProps) => {
    // ---------- Variables Declaration ---------- //
    // ---------- Loader UI (Render Part) ---------- //
    return (
        <Modal style={styles.modalContainer} isVisible={props.visible}>
            <View style={[styles.container, props.extraStyle]}>
                <ActivityIndicator size={Platform.OS === 'ios' ? "small" : 'large'} color={Colors.Black} />
                <Text style={styles.loaderText}>{Strings.LoaderMsg1}</Text>
            </View>
        </Modal>
    )
}
// ---------- Loader StyleSheet ---------- //
const styles = StyleSheet.create({
    modalContainer: {
        margin: 0
    },
    container: {
        backgroundColor: Colors.White,
        borderRadius: scale(15),
        height: Variables.windowHeight / 5,
        width: Variables.windowWidth - 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loaderText: {
        fontSize: FontSize.Sixteen,
        marginTop: scale(10),
        lineHeight: scale(20),
        color: Colors.Black,
    }
})
export default Loader
