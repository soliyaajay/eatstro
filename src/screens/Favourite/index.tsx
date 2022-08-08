// ---------- Imports ---------- //
import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Strings from '../../common/Strings';
import SearchBar from '../../components/bars/SearchBar';
import { Container, SafeContainer } from '../../styledComponents';
import GlobalStyles from '../../theme/GlobalStyles';
// ---------- Global Variables Declaration ---------- //

// ---------- Favourite Screen ---------- //
const Favourite = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Function Declaration---------- //
    // ---------- Favourite Screen return function---------- //
    return (
        <SafeContainer>
            <Container>
                <Text>{Strings.FavScr}</Text>
            </Container>
        </SafeContainer>
    );
};
export default Favourite;