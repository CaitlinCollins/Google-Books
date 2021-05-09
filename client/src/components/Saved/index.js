import React from "react";
import SavedBook from "../SavedBook";

function Saved() {
    return (
        <div className="savedDiv">
            <h4>Results</h4>
            {/* <div>
            {books.map(book =>  {
                        return ( */}
                           <SavedBook 
                        //    id={book.id}
                        //    title={book.title}
                        //    author={book.author}
                        //    description={book.description}
                        //    image={book.image}
                        //    alt={book.alt}
                        //    link={book.link}
                           />
                        {/* );
                     })} */}
            {/* </div> */}

        </div>
    )
}

export default Saved;