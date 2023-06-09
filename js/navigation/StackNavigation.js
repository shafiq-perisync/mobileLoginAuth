// import { createStackNavigator } from '@react-navigation/stack';
// // Non Auth Screens
// // Auth Screens

// import { LoginScreen } from '../screens/auth/login/Login';
// import { DashboardScreen } from '../screens/dashboard/Dashboard';
// import { useSelector } from 'react-redux';

// const Stack = createStackNavigator();

// export const StackNavigation = ()=> {
//     const { at } = useSelector(state => state.auth.user)

//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
   
//                 {/* <Stack.Group> */}
//                     <Stack.Screen name="Login" component={LoginScreen} />
//                 {/* </Stack.Group>  */}
//         </Stack.Navigator>
//     );
// }


import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/auth/login/Login';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  )
}