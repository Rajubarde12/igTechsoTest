import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import {NaviagationParam} from '../../navigation';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import Input from '../../compoents/Input';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { login } from '../../redux/reducer';

type Props = StackScreenProps<NaviagationParam, 'login'>;
const Login: React.FC<Props> = ({navigation}) => {
    const useData=useSelector((state:rootState)=>state.data.userdata)
    const dispatch=useDispatch()
  const [input, setInputs] = useState({
    name: '',
    password: '',
  });
  const [error,setError]=useState({
    name:'',
    password:''
  })
  const handleOnSubmit=()=>{
    let valid=true
    if(input.name==''){
        setError(prev=>({...prev,name:'please enter your name'}))
        valid=false
    }
    if(input.password==''){
        setError(prev=>({...prev,password:'please enter your password'}))
        valid=false
    }
    if(valid){
        // Alert.alert('aya')
        if(useData.name==input.name && useData.password==input.password){
            navigation.navigate('home')
        }else if(useData.name=='',useData.password==''){
            dispatch(login(input))
            navigation.navigate('home')
        }else{
            Alert.alert('Incorect User name or password')
        }
    }
    
  }
  return (
    <View style={styles.container}>
        <ScrollView style={{paddingBottom:20}}>
      <View style={styles.normalview} />
      <View style={styles.textContainer}>
        <Text style={styles.txt}>Welcome !!</Text>
        <Text
          style={[
            styles.txt,
            {color: 'green', fontWeight: 'bold', marginTop: 5},
          ]}>
          Sign In
        </Text> 
        <Input
          onChangeText={input =>{setError(prev=>({...prev,name:''})) ;setInputs(prev => ({...prev, name: input.toLowerCase()}))}}
          label="User Name"
          placeholder="Enter Your name"
          error={error.name}
          onFocus={()=>setError(prev=>({...prev,name:''}))}
        />
        <Input
          onChangeText={input =>{setError(prev=>({...prev,password:''})) ;setInputs(prev => ({...prev, password: input.toLowerCase()}))}}
          placeholder="Enter Your Password"
          label="Password"
          error={error.password}
          onFocus={()=>setError(prev=>({...prev,password:''}))}
        />
        <Text style={styles.forgotPassword}>Forgot Your Pasword?</Text>
        <TouchableOpacity onPress={()=>{handleOnSubmit()}} style={styles.mainBtn}>
          <Text style={styles.mainBtntxt}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <View style={styles.socialIconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/facebook.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/instagram.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/twitter.png')}
          />
        </View>
        <Text style={styles.signUp}>
          Don't have an account? <Text style={{color: 'green'}}>Sign Up</Text>
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};
export default Login;
