import axios from "axios";

export function requestGetBlog() {
  return axios.request({
    method: "get",
    url: "https://dummyjson.com/products/"
  });
}