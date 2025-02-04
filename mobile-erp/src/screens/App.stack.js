import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../core/theme'
import { TabPublic,LoginScreen ,StockManagement} from './index';
import StockArticles from './public/stock.management/stock.articles'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="TabPublic" component={TabPublic} />
          <Stack.Screen name="StockManagement" component={StockManagement} />
          <Stack.Screen name="StockArticlesT" component={StockArticles} />

          
          {/* <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
