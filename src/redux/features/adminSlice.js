import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")) : null,
    },
    reducers: {
        adminLogin: (state, action) => {
            state.admin = action.payload;
        },
        adminLogout: (state, action) => {
            localStorage.removeItem("admin");
            state.admin = null;
        }
    }
})



export const { adminLogin, adminLogout } = adminSlice.actions
export default adminSlice.reducer