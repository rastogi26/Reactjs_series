import {createSlice} from '@reduxjs/toolkit';

//this slice is used to track the user authentication i.e user is authenticated or not

const initialState = {
    //create initial state depending upon the use case
    status: false, // user is not auenticated
    userData: null, // no user data
}



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        // indiviual methods/functions and give two values state & action 
        login: (state,action)=>{
            state.status= true;
            state.userData=action.payload.userData;
        } ,
        logout: (state)=>{
                 state.status=false
                 state.userData=null
        }
    }
})

// authSlice.actions means in authSlice we have reducers and in reducers we have actions i.e the methods
export const {/* export the actions/methods */ login,logout  } = authSlice.actions;

export default authSlice.reducer