import { configureStore, combineReducers } from '@reduxjs/toolkit'
import commiteeReducer from './slice/commitee'
import userReducer from './slice/user'
import sideBarReducer from './slice/sideBar'
import { persistStore } from 'redux-persist'

const combinedReducer = combineReducers({
  commitee: commiteeReducer,
  user: userReducer,
  sideBar: sideBarReducer
})

const store = configureStore({
  reducer: combinedReducer
})

export const persistor = persistStore(store)

export default store
