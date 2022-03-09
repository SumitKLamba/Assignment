export const LOAD_BLOG_LOADING = 'LOAD_BLOG_LOADING';
export const LOAD_BLOG_SUCCESS = 'LOAD_BLOG_SUCCESS';
export const LOAD_BLOG_ERROR = 'LOAD_BLOG_ERROR';

export const loadBlog = () => {
  return {
    type: LOAD_BLOG_LOADING,
  }
};

const initialState = {
  blogs: {},
  loading: true,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG_LOADING: {
      return {
          ...state,
          loading: true,
          error:''
      };
  }
  case LOAD_BLOG_SUCCESS: {
      return {
          ...state,
          blogs: action.data,
          loading: false
      }
  }
  case LOAD_BLOG_ERROR: {
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
};