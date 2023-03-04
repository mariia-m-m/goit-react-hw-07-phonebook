import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./root-reducer";



export const store=configureStore({ 
    reducer: rootReducer
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