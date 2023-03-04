import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./root-reducer";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import contactsReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter-reducer';


export const store=configureStore({ 
    reducer: rootReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export default store
// const store = configureStore({ 
//     reducer: {
//         contacts: contactsReducer,
//         filter:filterReducer
//     },

// })

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store