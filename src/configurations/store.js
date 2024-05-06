import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/counterSlice';
import postReducer from "../components/posts/postSlice";
import usersReducer from "../components/posts/users/userSlice";

export const store = configureStore({
    reducer: {
        // lesson 1 counter reducer
        counter: counterReducer,

        // lesson 2 blog post reducers
        posts: postReducer,
        users: usersReducer
    }
})