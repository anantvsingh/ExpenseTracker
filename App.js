import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AllExpenses from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screens/RecentExpenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpenses from './screens/ManageExpenses';
import { GlobalStyles } from './constants/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons'


const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function App () {
  function BottomTab(){
    return (
      <Tab.Navigator screenOptions={{
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor:"white",
        tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
        tabBarActiveTintColor:"white",
        tabBarLabelStyle:{fontSize:12,fontWeight:'bold'}
      }}>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title:'Recent Expenses',
        tabBarLabel:'Recent',
        tabBarIcon:({ color,size })=>(<Icon name='hourglass' color={color} size={size}/>)
      }}/>
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
        title:'All Expenses',
        tabBarLabel:'All',
        tabBarIcon:({ color,size })=>(<Icon name='calendar' color={color} size={size}/>),
        
      }}/>
    </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Expense Overview' component={BottomTab} options={{
        headerShown:false
      }}/>
      <Stack.Screen name='ManageExpenses' component={ManageExpenses}/>
    </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //   <Tab.Screen name="RecentExpenses" component={RecentExpenses} />
    //   <Tab.Screen name="AllExpenses" component={AllExpenses} />
    // </Tab.Navigator>
    // </NavigationContainer>
    
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
