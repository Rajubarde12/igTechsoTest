import {StyleSheet} from 'react-native';
import {heightPercent as hp, widthPrecent as wp} from '../responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  txt: {
    color: 'black',
    fontSize: wp(8),
    marginLeft: wp(3),
    marginTop: hp(3),
    fontWeight:'500',
   
  },
  normalview: {
    height: hp(10),
  },
  textContainer: {
    paddingHorizontal: wp(2),
  },
  inputContainer:{
    borderWidth:1,
   // marginLeft:wp(8),
    marginTop:hp(4)

  },
  forgotPassword:{
    color:'grey',
    marginTop:hp(0.5),
    fontSize:wp(5),
    fontWeight:'800',
    alignSelf:'flex-end',
    marginRight:wp(2)
  },
  mainBtn:{
    height:hp(7),
    width:wp(65),
    alignSelf:'center',
    backgroundColor:'green',
    marginTop:hp(5),
    borderRadius:wp(6),
    alignItems:'center',
    justifyContent:'center'
  },
  mainBtntxt:{
    fontSize:wp(5),
    fontWeight:'600',
    color:'white'
  },
  socialIconContainer:{
    flexDirection:'row',
    width:"60%",
    justifyContent:'space-between',
    alignSelf:'center',
    marginTop:hp(5)
  },
  icon:{
    height:hp(5.5),
    width:hp(5.5)
  },
  or:{
    alignSelf: 'center',
    color: 'grey',
    marginTop: hp(5),
    fontSize: 20,
  },
  signUp:{
    color:'grey',
    marginTop:hp(5),
    alignSelf:'center',
    fontSize:wp(5),
    fontWeight:'bold'
  }
});
