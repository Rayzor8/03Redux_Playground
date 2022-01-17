import { createSlice } from '@reduxjs/toolkit';
import { usersData } from '../../data/usersData';

export const usersSlice = createSlice({
   name: 'users',
   initialState: { value: usersData },
   reducers: {
      addUsers: (state, action) => {
         console.log(action);
         state.value.push(action.payload);
      },
      editStatus: (state, action) => {
         console.log(action);
         state.value.map((user) => {
            if (user.id === action.payload) {
               user.edit = !user.edit;
            }
            return null;
         });
      },
      deleteUser: (state, action) => {
         console.log(action);
         state.value = state.value.filter((user) => user.id !== action.payload);
      },
      updateUser: (state, action) => {
         console.log(action);
         state.value.map((user) => {
            if (user.id === action.payload.id) {
               user.name = action.payload.name;
               user.age = action.payload.age;
            }
            return null;
         });
      },
   },
});

export const { addUsers, editStatus, deleteUser,updateUser } = usersSlice.actions;
export default usersSlice.reducer;
