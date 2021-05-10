import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Searches from "../components/Searches";
import Results from "../components/Results";
import API from "../utils/API";


function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    searchBooks = query => {
    API.search(query)
    .then(res => {
        const bookData = res.data.items;
        const displayData = bookData.map(book => {
            return {
                id: book.id,
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors,
                discription: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail,
                link: book.volumeInfo.infoLink
            }
        })
        setBooks(displayData)
    })
    .catch(err => console.log(err))
    }

    handleClick = event => {
        event.preventDefault();
        if (query) {
            searchBooks();
        }
    }

    return (
        <div>
            <Jumbotron />
            <Searches />
            <Results 
            />
        </div>
    )
}

export default Search;