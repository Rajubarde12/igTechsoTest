import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {heightPercent as hp, widthPrecent as wp} from '../screens/responsive';
type Props={
    label:string;
    placeholder:string;
    onChangeText:(input:string)=>void,
    error:string,
    onFocus:()=>void
}
const Input:React.FC<Props> = ({label,placeholder,onChangeText,error,onFocus}) => {
  return (
    <View style={[styles.inputContianer,{borderColor:false?'red':'green'}]}>
      <View style={styles.lableContainer}>
        <Text style={[styles.label,{color:false?'red':'black'}]}>{label}</Text>
      </View>
      <TextInput onFocus={onFocus} onChangeText={onChangeText} style={styles.inputField} placeholder={error?error:placeholder} placeholderTextColor={error?'red':'grey'} />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  inputContianer: {
    borderWidth: wp(0.5),

    marginTop: hp(5),
    borderRadius: wp(2),
    borderColor: 'green',
  },
  lableContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    top: hp(-2),
    left: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    justifyContent: 'center',
  },
  label: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: '700',
  },
  inputField:{
    fontSize:wp(5),
    paddingLeft:8,
    fontWeight:'500',
    color:'black'
  }
});
