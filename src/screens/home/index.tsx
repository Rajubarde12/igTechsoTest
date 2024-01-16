import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NaviagationParam} from '../../navigation';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { heightPercent as hp,widthPrecent as wp  } from '../responsive';
import { TouchableOpacity } from 'react-native-gesture-handler';
type Props = StackScreenProps<NaviagationParam, 'home'>;
const Home: React.FC<Props> = ({navigation}) => {
    const userData=useSelector((state:rootState)=>state.data.userdata)
  return <View style={styles.container}>
      <Text style={styles.txt} >Welcome !</Text>
      <Text style={styles.txt2}> {userData.name}</Text>
      <TouchableOpacity onPress={()=>navigation.reset({index:0,routes:[{name:'login'}]})} style={styles.btn}>
        <Text style={styles.btntxt}>Log Out</Text>
      </TouchableOpacity>
  </View>;
};
export default Home;
const styles=StyleSheet.create({
    container:{
        flex:1,
    
    },
    txt:{
        color:'green',
        alignSelf:'center',
        marginTop:hp(25),
        fontSize:wp(15),
        fontWeight:'bold',

    },
    txt2:{
        fontSize:wp(10),
        color:'black',
        alignSelf:'center',
        fontWeight:'bold'
    },
    btn:{
       // backgroundColor:'green',
        height:hp(8),
        width:wp(65),
        alignSelf:'center',
        marginTop:hp(8),
        borderRadius:hp(5),
        alignItems:'center',
        justifyContent:'center',
        borderWidth:wp(1),
        borderColor:'green'

    },
    btntxt:{
      color:'green',
      fontSize:wp(5),
      fontWeight:'700'

    }
})
