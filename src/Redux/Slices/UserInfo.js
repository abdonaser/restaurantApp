import { createSlice } from "@reduxjs/toolkit"




const UserInfoSlice = createSlice({
    name: "UserInfo",
    initialState: { userInfo: {} },
    reducers: {
        updateInfo: (state, action) => {
            // state.userInfo = { ...state.userInfo, action }
            state.userInfo = action.payload
        }
    }
})

export const { updateInfo } = UserInfoSlice.actions
export default UserInfoSlice.reducer