import { useState } from "react";
import "./styles.css";

export default function App() {
  // Database of Book list Object, containing the array of objects

  var booksList = {
    History: [
      {
        name: "The Last Mughal: Fall of a Dynasty :Delhi, 1857",
        rating: "4.16/5",
      },
      {
        name: "Ghenghis Khan and the Making of Mordern World",
        rating: "3.5/5",
      },
    ],
    Fiction: [
      { name: "Breakfast at Tiffany's", rating: "3.87/5" },
      { name: "Harry Potter & Sorcerer's Stone", rating: "4.47/5" },
    ],
    Science: [
      { name: "Sapiens:A Brief History of Humankind", rating: "4.40/5" },
      {
        name: "To Pixar & Beyond: My Unlikely Journey with Steve Jobs to Make Entertaintment History ",
        rating: "4.21/6",
      },
    ],
  };

  // Converting Object to Array
  var bookGenre = Object.keys(booksList);

  // Calling useState with Inital value of one of the object keys
  const [userInput, setUserInput] = useState("History");

  // Defining a function for OnClick Event
  function buttonClickHandler(genreName) {
    setUserInput(genreName);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        favoritereads
      </h1>
      <h2 className="description">
        Checkout my favorite books. Select a genre to get started
      </h2>
      {/* Mapping over each Genre Name */}
      {bookGenre.map(function (genreName) {
        return (
          <button
            // Checking which button is clicked via onclick event
            onClick={() => buttonClickHandler(genreName)}
            className="button"
          >
            {/* Returning book genre in buttons in view*/}
            {genreName}
          </button>
        );
      })}
      <div>
        <hr />
        <ul>
          {/* Mapping over each object in Book Genre array */}
          {booksList[userInput].map(function (book) {
            return (
              <li key={book.name} className="recommendation-list">
                {book.name}
                <div className="ratings">{book.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
