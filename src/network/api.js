const API_BASE_ADDRESS = 'https://dummyjson.com';

export default class Api {
   static getBlogs() {
       const uri = API_BASE_ADDRESS + "/products";
       
       return fetch(uri, {
           method: 'GET'
       });
   }
}