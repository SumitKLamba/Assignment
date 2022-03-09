import axios from "axios";

export function requestGetBlog() {
  return axios.request({
    method: "get",
    url: "https://localhost:4000/blogs/"
  });
}