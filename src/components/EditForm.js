import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../features/users/usersSlice';

const EditForm = ({ userId }) => {
   const [newUser, setNewUser] = useState({
      name: '',
      age: '',
   });

   const refs = {
      name: useRef(),
      age: useRef(),
   };

   const dispatch = useDispatch();

   const handleSubmitEditForm = (e) => {
      e.preventDefault();

      if (newUser.name === '' && newUser.age === '') {
         refs.name.current.focus();
         return;
      }

      if (newUser.name && newUser.age === '') {
         refs.age.current.focus();
         return;
      }

      if (newUser.age && newUser.name === '') {
         refs.name.current.focus();
         return;
      }

      dispatch(
         updateUser({ id: userId, name: newUser.name, age: newUser.age })
      );

      setNewUser({
         name: '',
         age: '',
      });
   };

   return (
      <form
         className="flex flex-col xl:flex-row justify-center items-center gap-4 bg-slate-700 py-4 px-2 lg:px-0"
         onSubmit={handleSubmitEditForm}
      >
         <input
            ref={refs.name}
            type="text"
            placeholder="Edit Username here.."
            className="px-2 rounded"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
         />
         <input
            ref={refs.age}
            type="number"
            placeholder="Edit Age here.."
            className="px-2 rounded"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
         />
         <button
            className="bg-yellow-400 py-1 lg:py-0 px-2 rounded text-xs lg:text-lg"
            type="submit"
         >
            Confirm Edit
         </button>
      </form>
   );
};

export default EditForm;
