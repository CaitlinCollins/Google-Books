import axios from "axios";
const URL="https://www.googleapis.com/books/v1/volumes?q="; 
const APIKEY = "&key=AIzaSyBzCjVzUeAXPiMvfyuxrJfE1OY37FNiD68";

export default {
    search: function(query) {
        return axios.get(URL + query + APIKEY)
    },

    getAll: function() {
        return axios.get("/api/books");
    },

    getOne: function() {
        return axios.get("/api/books/" + id)
    },

    delete: function() {
        return axios.delete("/api/books" + id)
    },

    save: function(book) {
        return axios.post("/api/books", book)
    }

};

