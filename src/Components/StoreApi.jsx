import React, { useState, useEffect } from 'react';
import axios from "axios";
import BookFilter from './ExampleCode';
import BooksData from './BooksData';


const StoreApi = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    let filteredBooks = [];
    if (message && message[0] && message[0].Books) {
        filteredBooks = message[0].Books.filter(book =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);  // Update the search term when input changes
      };

    return (
        <div>
            <BookFilter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            {message && message[0] && message[0].Books && (
                <BooksData books={filteredBooks} />
            )}
        </div>
    )
}

export default StoreApi