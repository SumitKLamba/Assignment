export const LOAD_BLOG_LOADING = "LOAD_BLOG_LOADING";
export const LOAD_BLOG_SUCCESS = "LOAD_BLOG_SUCCESS";
export const LOAD_BLOG_ERROR = "LOAD_BLOG_ERROR";

//dispatches the action LOAD_BLOG_LOADING
export const loadBlog = () => {
  return {
    type: LOAD_BLOG_LOADING,
  };
};

//intial states of the blogsReducer
const initialState = {
  data: {},
  loading: true,
  error: "",
};

//reducer to perform action on the actions that are being dispatched
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_BLOG_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case LOAD_BLOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
