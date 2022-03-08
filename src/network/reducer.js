import {LOAD_BLOGS_ERROR, LOAD_BLOGS_LOADING, LOAD_BLOGS_SUCCESS} from "./actions";

const initialState = {
   data: [],
   loading: false,
   error: ''
};

export default function reduxSagaReducer(state = initialState, action) {
   switch (action.type) {
       case LOAD_BLOGS_LOADING: {
           return {
               ...state,
               loading: true,
               error:''
           };
       }
       case LOAD_BLOGS_SUCCESS: {
           return {
               ...state,
               data: action.data,
               loading: false
           }
       }
       case LOAD_BLOGS_ERROR: {
           return {
               ...state,
               loading: false,
               error: action.error
           };
       }
       default: {
           return state;
       }
   }
}