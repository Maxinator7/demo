import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './redux'
export const store =configureStore({
    reducer:{
        MeetupData:dataReducer
    }
})