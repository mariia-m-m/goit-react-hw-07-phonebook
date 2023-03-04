import {createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../../shared/contactsApi";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async (_, thunkAPI)=>{
        try {
            const data = await api.getAllcontacts();
            return data
        }
        catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data)
            
        }
 }   
)

export const fetchAddContacts = createAsyncThunk(
    "contacts/add",
    async (data, thunkAPI) => {
        try {
            const result = await api.addContact(data);
            return result
        }
        catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data)
            
        }
    },
        {condition: ({name,number}, { getState }) => {
            const { contacts } = getState();
  const normalizedName = name.toLowerCase();
    const result = contacts.items.find(item => {
      return (
        item.name.toLowerCase() === normalizedName && item.number === number
      )
    })
            if (result) {
             alert(`Dear User, ${name} with number ${number} is already in your contacts!`);
            return false
        }
        }
        }  
)

export const fetchDeleteContacts = createAsyncThunk(
    "contacts/delete",
    async ( id, {rejectWithValue})=>{
        try {
          await api.deleteContact(id);
            return id
        }
        catch ({ response }) {
            return rejectWithValue(response.data)
            
        }
 }   
)


// export const fetchAllContacts = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.fetchAllContactsLoading()) 
//             //  запит пiшов
//             const data = await api.getAllcontacts();
//             dispatch(actions.fetchAllContactsSuccess(data))
//              // запит отримано
//         }
//         catch ({ response }) {
//             dispatch(actions.fetchAllContactsError(response.data.message))
            
//         }
//     }
//     return func
// }


// export const fetchAddContacts = (data) => {
//         const func = async (dispatch,getState) => {
//             try {
//                 const { contacts } = getState();
//                 if (isDublicate(contacts.items, data)) {
//                     alert(`Dear User, ${data.name} with number ${data.number} is already in your contacts!`);
//                     return false
//                 }
//             dispatch(actions.fetchAddContactsLoading()) 
//             const result = await api.addContact(data);
//             dispatch(actions.fetchAddContactsSuccess(result))
//         }
//         catch ({ response }) {
//             dispatch(actions.fetchAddContactsError(response.data.message))

//         }
//     }
//     return func
// }

// export const fetchDeleteContacts = (id) => {
//         const func = async (dispatch) => {
//             try {
//                 dispatch(actions.fetchDeleteContactsLoading());
//                 await api.deleteContact(id);
//                 dispatch(actions.fetchDeleteContactsSuccess(id))
//         }
//         catch ({ response }) {
//             dispatch(actions.fetchDeleteContactsError(response.data.message))

//         }
//     }
//     return func
// }