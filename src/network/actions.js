export const LOAD_BLOGS_LOADING = 'LOAD_BLOGS_LOADING';
export const LOAD_BLOGS_SUCCESS = 'LOAD_BLOGS_SUCCESS';
export const LOAD_BLOGS_ERROR = 'LOAD_BLOGS_ERROR';

export const loadBlogs = () => dispatch => {
   dispatch({ type: LOAD_BLOGS_LOADING });
};