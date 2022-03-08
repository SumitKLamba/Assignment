export const GET_BLOG = "GET_BLOG";
const SET_BLOG = "SET_BLOG";

export const getBlog = () => ({
  type: GET_BLOG
});

export const setBlog = (blog) => ({
  type: SET_BLOG,
  blog
});

const initialState = {
  blog: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG:
      const { blog } = action;
      return { ...state, blog };
    default:
      return state;
  }
};