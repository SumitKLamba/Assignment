import axios from "axios";

export function requestGetBlog() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/blogs/",
  });
}