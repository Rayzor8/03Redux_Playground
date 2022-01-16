import React from 'react';
import { useSelector } from 'react-redux';
import FormInput from './components/FormInput';
import { useDispatch } from 'react-redux';
import { editStatus } from './features/users/usersSlice';

function App() {
   const userList = useSelector((state) => state.users.value);

   const dispatch = useDispatch();

   const showEditHandler = (id) => {
      const findEl = userList.find((el) => el.id === id);
      dispatch(editStatus(findEl.id));
   }

   return (
      <div className="App bg-slate-900 text-white w-full min-h-screen p-2 lg:p-4 font-mono">
         <main className="flex flex-col gap-10">
            <FormInput />

            <section className="flex flex-col gap-4 justify-center items-center">
               {userList.map((user) => (
                  <div
                     key={user.id}
                     className="flex flex-col gap-2 bg-white text-slate-900 rounded-md w-full md:w-3/5 lg:w-1/2 overflow-hidden"
                  >
                     <div className="p-4 relative">
                        <h2 className="text-xs px-2 py-1 rounded absolute top-2 right-2 w-max bg-slate-900 text-white">
                           id: {user.id}
                        </h2>
                        <h3 className="text-xl mt-6 md:mt-0">
                           Name: {user.name}
                        </h3>
                        <h4 className="text-lg">Age: {user.age}</h4>
                     </div>
                     <div className="flex justify-center items-center gap-4  py-2 px-2 lg:px-0">
                        <button
                           className="bg-yellow-400 py-1 lg:py-0 px-2 rounded text-xs lg:text-lg"
                           onClick={() => showEditHandler(user.id)}
                        >
                           Edit
                        </button>
                        <button className="bg-red-500 py-1 lg:py-0 px-2 rounded text-xs lg:text-lg">
                           Delete
                        </button>
                     </div>

                     {user.edit && (
                        <div className="flex justify-center items-center gap-4 bg-slate-700 py-2 px-2 lg:px-0">
                           <input
                              type="text"
                              placeholder="Edit here.."
                              className="px-2 rounded"
                           />
                           <button className="bg-yellow-400 py-1 lg:py-0 px-2 rounded text-xs lg:text-lg">
                              Confirm Edit
                           </button>
                        </div>
                     )}
                  </div>
               ))}
            </section>
         </main>
      </div>
   );
}

export default App;
