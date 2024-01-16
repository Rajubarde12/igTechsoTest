import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Home from "../screens/home";
export type NaviagationParam={
    login:undefined,
    home:undefined
 }
const MyStack=()=>{
    const Stack=createStackNavigator<NaviagationParam>()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='home' component={Home}/>
        </Stack.Navigator>
    )
}
export default MyStack