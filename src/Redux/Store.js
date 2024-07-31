import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from './Slices/UserInfo.js'

const Store = configureStore({
    reducer: {
        userInfoStore: UserInfoSlice
    }
})


export default Store;