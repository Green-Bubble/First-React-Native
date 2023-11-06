import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './store';
import { Provider } from 'react-redux';

import Home from './view-layer/pages/Home';
import Products from './view-layer/pages/Products';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Products" component={Products} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;