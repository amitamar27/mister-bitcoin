import { configureStore } from '@reduxjs/toolkit'
import  {contactsReducer}  from './reducers/contactsReducer.js'
import { userReducer } from './reducers/userReducer.js'
import {combineReducers} from "redux"; 

import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

// const userPersistConfig = {
//     key: 'user',
//     storage: storageSession,
// }

const rootReducer = combineReducers({
    userModule: userReducer,
    contactModule: contactsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})

export const persistor = persistStore(store)



window.myStore = store


