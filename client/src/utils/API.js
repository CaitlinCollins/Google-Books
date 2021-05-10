import axios from "axios";
const URL="https://www.googleapis.com/books/v1/volumes?q="; 
const APIKEY = "&key=AIzaSyBzCjVzUeAXPiMvfyuxrJfE1OY37FNiD68";

export default {
    search: function(query) {
        return axios.get(URL + query + APIKEY)
    }
};