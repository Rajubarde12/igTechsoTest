import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    userdata:{
        name:'',
        password:''
    }
}

const reducer=createSlice ({
   name:'igtechso',
   initialState,
   reducers:{
    login:(state,action)=>{
        return{...state,userdata:action.payload}
    }
   }
})
export const {login} =reducer.actions
export default reducer.reducer