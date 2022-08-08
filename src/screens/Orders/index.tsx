// ---------- Imports ---------- //
import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Strings from '../../common/Strings';
import { Container, SafeContainer } from '../../styledComponents';
// ---------- Global Variables Declaration ---------- //

// ---------- Orders Screen ---------- //
const Orders = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Function Declaration---------- //
    // ---------- Orders Screen return function---------- //
    return (
        // console.log('props', props),
        <SafeContainer>
            <Container>
                <Text>{Strings.OrdersScr}</Text>
            </Container>
        </SafeContainer>
    );
};
export default Orders;