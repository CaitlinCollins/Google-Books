import React from "react";
import Book from "../Book";

function Results(props) {
    console.log(props.books)
    return (
        <div className="resultsDiv">
            <h4>Results</h4>
            <div>
            {props.books.map(book =>  {
                        return (
                           <Book 
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            image={book.image}
                            alt={book.alt}
                            link={book.link}
                           />
                         );
                      })} 
             </div> 
        </div>
    )
}

export default Results;