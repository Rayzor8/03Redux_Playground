import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUsers } from '../features/users/usersSlice';

const FormInput = () => {
   const userList = useSelector((state) => state.users.value);
   const [formInput, setFormInput] = React.useState({
      name: '',
      age: '',
   });

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
         addUsers({
            id: userList[userList.length - 1].id + 1,
            name: formInput.name,
            age: formInput.age,
         })
      );
      setFormInput({ name: '', age: '' });
   };

   return (
      <form
         className="flex gap-4 justify-center items-center  mt-2 text-lg flex-col lg:flex-row"
         onSubmit={handleSubmit}
      >
         <div className="flex gap-2 lg:items-center flex-col lg:flex-row ">
            <label htmlFor="userName" className="font-bold text-xl">
               Username
            </label>
            <input
               type="text"
               name="userName"
               className="py-1 rounded text-slate-900 px-2"
               placeholder="Enter username"
               value={formInput.name}
               onChange={(e) =>
                  setFormInput({ ...formInput, name: e.target.value })
               }
            />
         </div>
         <div className="flex gap-2 lg:items-center flex-col lg:flex-row ">
            <label htmlFor="userName" className="font-bold text-xl">
               Age
            </label>
            <input
               type="number"
               name="age"
               className="py-1 rounded text-slate-900 px-2"
               placeholder="Enter age"
               value={formInput.age}
               onChange={(e) =>
                  setFormInput({ ...formInput, age: e.target.value })
               }
            />
         </div>
         <button type="submit" className="bg-green-500 px-4 py-1 rounded">
            Add user
         </button>
      </form>
   );
};

export default FormInput;
