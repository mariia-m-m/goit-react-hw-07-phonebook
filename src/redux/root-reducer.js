import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter:filterReducer,
})


export default rootReducer