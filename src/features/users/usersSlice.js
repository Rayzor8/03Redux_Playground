import { createSlice } from '@reduxjs/toolkit';
import { usersData } from '../../data/usersData';

export const usersSlice = createSlice({
   name: 'users',
   initialState: { value: usersData },
   reducers: {
       addUsers: (state, action) => {
           console.log(action)
           state.value.push(action.payload);
       },
       editStatus: (state, action) => {
           console.log(action)
              state.value.map(user => {
                if (user.id === action.payload) {
                     user.edit = !user.edit;
                }
              })
       }
   },
});


export const { addUsers,editStatus } = usersSlice.actions;
export default usersSlice.reducer;
