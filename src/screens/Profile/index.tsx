// ---------- Imports ---------- //
import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Strings from '../../common/Strings';
import SearchBar from '../../components/bars/SearchBar';
import { Container, SafeContainer } from '../../styledComponents';
import GlobalStyles from '../../theme/GlobalStyles';
// ---------- Global Variables Declaration ---------- //

// ---------- Profile Screen ---------- //
const Profile = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Function Declaration---------- //
    // ---------- Profile Screen return function---------- //
    return (
        // console.log('props', props),
        <SafeContainer>
            <Container>
                <Text>{Strings.ProfileScr}</Text>
            </Container>
        </SafeContainer>
    );
};
export default Profile;