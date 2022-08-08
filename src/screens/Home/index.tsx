// ---------- Imports ---------- //
import React, { useEffect, useState, type PropsWithChildren } from 'react';
import { FlatList, Image, SafeAreaView, Text, View, } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Colors } from '../../common/Colors';
import Images from '../../common/Images';
import Strings from '../../common/Strings';
import SearchBar from '../../components/bars/SearchBar';
import FoodItem from '../../components/home/FoodItem';
import Loader from '../../components/Loader';
import { showToast, sum } from '../../Functions';
import { kitchenApi } from '../../graphQl';
import { Container, H1, H3, NormalText, SafeContainer } from '../../styledComponents';
import GlobalStyles from '../../theme/GlobalStyles';
// ---------- Global Variables Declaration ---------- //

// ---------- Home Screen ---------- //
const Home = (props: any) => {
    // ---------- Variables Declaration---------- //
    const [searchValue, setSearchValue] = useState('')
    const [foodData, setFoodData] = useState([])
    const [filteredFoodData, setFilteredFoodData] = useState(foodData)
    const [loading, setLoading] = useState(false)
    const { addListener } = props.navigation
    // ---------- Life-Cycle Method---------- //
    useEffect(() => {
        kitchenData()
    }, [props.navigation])
    // ---------- Function Declaration---------- //
    async function kitchenData() {
        setLoading(true)
        await kitchenApi()?.then((response) => {
            setLoading(false)
            // console.log('response', response);
            const { items } = response
            setFoodData(items)
            setFilteredFoodData(items)
        })
    }
    function searchSomething(searchText: string) {
        setSearchValue(searchText)
        var newText = searchText
        newText = newText.trim().toLowerCase();
        let data = foodData.filter((l) =>
            l.price.toString().includes(newText) || l.name.toLowerCase().includes(newText)
        );
        setFilteredFoodData([...data])
    }

    function likeItem(liked: boolean, index: number) {
        let newFoodData = foodData.map((item, index) => { return { ...item, liked: false } })
        let obj = newFoodData[index]
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        obj.favoriteCount = randomNumber
        obj.liked = !liked
        newFoodData[index] = obj
        setFilteredFoodData([...newFoodData])
    }
    // ---------- Home Screen return function---------- //
    return (
        <SafeContainer>
            <Container>
                <View style={GlobalStyles.homeGreetingsContainer}>
                    <H1 color={Colors.Black}>{Strings.HiUser}</H1>
                    <Image style={GlobalStyles.handImg} source={Images.Hand} />
                </View>
                <NormalText color={Colors.DarkGrey2}>{Strings.WWLTET}</NormalText>
                <SearchBar extraStyle={GlobalStyles.mt10} placeholder={Strings.SearchSomething} onChangeText={(val: string) => searchSomething(val)} searchValue={searchValue} onPress={() => sum(10,15)} testID={'sum'}/>
                <View style={GlobalStyles.homeBottomContainer}>
                    <H3>{Strings.SearchResults}</H3>
                    <FlatList
                    testID='foodList'
                        contentContainerStyle={{ paddingTop: scale(10), paddingBottom: '70%' }}
                        data={filteredFoodData}
                        pagingEnabled
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            let dataProp
                            if (!item.hasOwnProperty('liked')) {
                                dataProp = { ...item, liked: false, }
                            }
                            else {
                                dataProp = { ...item }
                            }
                            return (
                                <FoodItem dataProp={dataProp} onPressAdd={() => showToast(Strings.CartMsg)} onPressLike={() => likeItem(item.liked, index)} />
                            )
                        }} />
                </View>
            </Container>
            {loading && <Loader visible={loading} extraStyle={{}} />}
        </SafeContainer>
    );
};
export default Home;