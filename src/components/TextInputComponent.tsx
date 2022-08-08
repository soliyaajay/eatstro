// ---------- Imports ---------- //
import React, { } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors } from '../common/Colors'
import { FontSize } from '../common/FontSize'
// ---------- TextInputComponent Functional ---------- //

interface TextInputProps {
    placeholder: any,
    keyboardType: any,
    secureTextEntry: any,
    value: any,
    onChangeText: any,
    extraStyle: any,
    maxLength: any,
    placeholderTextColor: any,
    returnKeyType: any,
    inputRef: any,
    onSubmitEditing: any,
    autoCapitalize: any,
    onFocus: any,
    numberOfLines: any,
    multiline: any
}

const TextInputComponent = (props: TextInputProps) => {
    // ---------- Variables Declaration ---------- //
    // ---------- TextInputComponent UI (Render Part) ---------- //
    return (
        <TextInput
            ref={props.inputRef}
            style={[styles.textInputContainer, props.extraStyle]}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            placeholderTextColor={props.placeholderTextColor}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCapitalize={props.autoCapitalize}
            maxLength={props.maxLength}
            returnKeyType={props.returnKeyType}
            onSubmitEditing={props.onSubmitEditing}
            onFocus={props.onFocus}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
        />
    )
}
// ---------- TextInputComponent StyleSheet ---------- //
const styles = StyleSheet.create({
    textInputContainer: {
        color: Colors.LightBlack,
        fontSize: FontSize.Twelve,
    },
})
export default TextInputComponent
