import axios from "axios";

//sending a request to the server to get the response
export function requestGetBlog() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/blogs/",
  });
}
