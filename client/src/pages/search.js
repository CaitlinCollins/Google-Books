import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Searches from "../components/Searches";
import Results from "../components/Results";
import API from "../utils/API";


function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    function searchBooks(query) {
    API.search(query)
    .then(res => {
        const bookData = res.data.items;
        const displayData = bookData.map(book => {
            console.log(book.volumeInfo.imageLinks)
            return {
                id: book.id,
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail,
                link: book.volumeInfo.infoLink
            }
        })
        setBooks(displayData)
    })
    .catch(err => console.log(err))
    }

    function handleInputChange(event) {
        const value = event.target.value;
        setQuery(value);
    }

    function handleClick(event) {
        event.preventDefault();
        if (query) {
            searchBooks(query);
        }
    }

    return (
        <div>
            <Jumbotron />
            <Searches query={query} handleInputChange={handleInputChange} handleClick={handleClick}/>
            <Results 
               books={books}
            />
        </div>
    )
}

export default Search;