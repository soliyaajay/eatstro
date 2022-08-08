import { ApolloProvider } from '@apollo/client';
import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, View } from 'react-native';
import AppRoutes from './src/routes';
import GlobalStyles from './src/theme/GlobalStyles';
import { client } from './src/graphQl/client'
import Toast from 'react-native-toast-message'
const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={GlobalStyles.container}>
        <AppRoutes />
        <Toast />
      </View>
    </ApolloProvider>
  );
};
export default App;