import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import {Navigate} from './screen/Navigate'
import Intro from './screen/Intro'
import Tutorial  from './screen/Tutorial'


const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}
 />
        <Stack.Screen name="Tutorial" component={Tutorial} options={{headerShown: false}}
 />
       </Stack.Navigator>
    </NavigationContainer>
)

}

