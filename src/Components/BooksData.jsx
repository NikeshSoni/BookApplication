import React, { useEffect, useState } from 'react';

const BooksData = ({ books }) => {

  console.log(books);

  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  // For second input method
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [minDayRent, setMinDayRent] = useState('');
  const [maxDayRent, setMaxDayRent] = useState('');

  // Filter by rent range
  const filterByRentRange = () => {
    const filtered = books.filter(
      book => book.rent_per_day >= minRent && book.rent_per_day <= maxRent
    );
    setFilteredBooks(filtered);
  };

  // Filter by category + term + rent range
  const filterByCategoryNameAndRent = () => {
    const filtered = books.filter(
      book =>
        book.category.toLowerCase().includes(category.toLowerCase()) &&
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.rent_per_day >= minDayRent &&
        book.rent_per_day <= maxDayRent
    );
    setFilteredBooks(filtered);
  };

  return (

    <>

      {/* <BooksData /> */}
      <div className='container px-5 mx-auto'>

        <div className=''>
          <h4 className='my-3'>Filter by Rent Price Range</h4>
          <div className='d-flex gap-3'>
            <input
              type="number"
              placeholder="Min Rent"
              className='range-price-input'
              value={minRent}
              onChange={(e) => setMinRent(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Rent"
              className='range-price-input'
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
            />

            <button onClick={filterByRentRange} className="btn-shine comman-btn">
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div >
          <h4 className='my-3'>Filter by Category + Name + Rent Per Day</h4>
          <div className='d-flex gap-4'>
            <input
              type="text"
              placeholder="Category"
              className='range-price-input'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "15%" }}
            />
            <input
              type="text"
              placeholder="Book Name"
              className='range-price-input'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "15%" }}
            />
            <input
              type="number"
              placeholder="Min Rent Per Day"
              className='range-price-input'
              value={minDayRent}
              onChange={(e) => setMinDayRent(e.target.value)}
              style={{ width: "15%" }}
            />
            <input
              type="number"
              placeholder="Max Rent Per Day"
              className='range-price-input'
              value={maxDayRent}
              onChange={(e) => setMaxDayRent(e.target.value)}
              style={{ width: "15%" }}
            />
            {/* <button ></button> */}
            <button onClick={filterByCategoryNameAndRent} className="btn-shine comman-btn">
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter by Category + Name/Term + Rent Per Day */}


      {/* Display Filtered Books */}
      <div>
        {filteredBooks.length > 0 ? (
          <div className='container my-3 row flex-wrap mx-auto' >
            {filteredBooks && filteredBooks && filteredBooks ? (
              filteredBooks.map((book) => (
                <div key={book.id} className='col-9 mx-auto col-md-5 col-lg-3'>
                  <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">{book.name}</div>
                    <div className="card-body text-secondary">
                      <div className='d-flex gap-2 text-align-center'>
                        <h6>Author -</h6>
                        <h5 className="card-title">{book.author}</h5>
                      </div>
                      <div className='d-flex gap-2 text-align-center'>
                        <p className="card-text p-0 m-0">Category -</p>
                        <p className="card-text p-0 m-0">{book.category}</p>
                      </div>
                      <div className='d-flex gap-2 text-align-center'>
                        <p className="card-text p-0 m-0">{book.rent_per_day}</p>
                        <a href='#' className="">Buy for Rent</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading books...</p> // Or display an error message
            )}
          </div>
        ) : (
          <p>No books found</p>
        )}
      </div>

      {/* <div className='container my-3 row flex-wrap offset-1' >
        {books && books && books ? (
          books.map((book) => (
            <div key={book.id} className='col-3'>
              <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">{book.name}</div>
                <div className="card-body text-secondary">

                  <div className='d-flex gap-2 text-align-center'>
                    <h6>Author -</h6>
                    <h5 className="card-title">{book.author}</h5>
                  </div>

                  <div className='d-flex gap-2 text-align-center'>
                    <p className="card-text p-0 m-0">Category -</p>
                    <p className="card-text p-0 m-0">{book.category}</p>
                  </div>

                  <div className='d-flex gap-2 text-align-center'>
                    <p className="card-text p-0 m-0">{book.rent_per_day}</p>
                    <a href='#' className="">Buy for Rent</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading books...</p> // Or display an error message
        )}
      </div> */}
    </>
  )
}

export default BooksData