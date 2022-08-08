import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { Colors } from '../common/Colors'
import { FontSize } from '../common/FontSize'

export const GlobalStyles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    container: {
        flex: 1,
        // backgroundColor: Colors.White,
        backgroundColor: Colors.ScreenBG,
    },
    // ----------------------- Common Styles ----------------------- //
    mt10: {
        marginTop: scale(10),
    },
    mt15: {
        marginTop: scale(15),
    },
    mt20: {
        marginTop: scale(20),
    },
    ms5: {
        marginStart: scale(5),
    },
    ms10: {
        marginStart: scale(10),
    },
    ms15: {
        marginStart: scale(15),
    },
    h1Text: {
        color: Colors.Black,
        fontSize: FontSize.Thirty,
    },
    handImg: {
        height: scale(30),
        width: scale(30),
        resizeMode: 'contain',
        marginStart: scale(10)
    },
    ordersContainer: {
        paddingHorizontal: scale(10)
    },
    profileContainer: {
        paddingHorizontal: scale(10)
    },
    btnCircle: {
        width: scale(55),
        height: scale(55),
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Main,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: scale(20),
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    img: {
        width: 30,
        height: 30,
    },
    // ------------------------ Home Styles ------------------------ //
    homeContainer: {
        paddingHorizontal: scale(10)
    },
    homeGreetingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: scale(10),
        paddingStart: scale(5)
    },
    homeTxtLine1: {
        color: Colors.DarkGrey2,
    },
    homeTxtLine2: {
        color: Colors.Black,
        fontSize: FontSize.Eighteen,
        lineHeight: scale(20),
    },
    homeBottomContainer: {
        paddingTop: scale(15)
    },
    // ---------------------- Favourite Styles ---------------------- //
    favouriteContainer: {
        paddingHorizontal: scale(10)
    },
})
export default GlobalStyles