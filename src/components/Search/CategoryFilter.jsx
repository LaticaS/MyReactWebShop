import React, { useState, useEffect, useContext } from "react";
import booksData from "../databooks.json";
import { Link } from "react-router-dom";
import "./Category.scss";
import { CartContext } from "../../context/cart.jsx";

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kategorije - all");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

  const bookCategories = [
    "Kategorije - all",
    "Publicistika",
    "Beletristika",
    "Kriminalistički",
    "Ljubavni",
    "SF",
    "Djeca i mladi",
    "Stručna literatura",
    "Rječnici",
    "Enciklopedije",
  ];

  useEffect(() => {
    if (selectedCategory === "Kategorije - all") {
      setFilteredBooks(booksData);
    } else {
      const filtered = booksData.filter((book) =>
        book.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="kategorije-wrapper">
      <h1>Ponuda 〱</h1>
      <select
        className="select-kategorije"
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={selectedCategory}
      >
        {bookCategories.map((category, index) => (
          <option key={index} value={category} className="option-kategorije">
            {category}
          </option>
        ))}
      </select>

      <div className="div-filtrirane-kategorije">
        {filteredBooks.map((book, index) => (
          <div key={index} className="div-book">
            <Link
              to={`/product/${book.id}`}
              title="Klikni za detaljnije"
              className="link-pretraga"
            >
              <img src={book.img} alt="book cover" className="img-kategorije" />
            </Link>
            <p>"{book.title}"</p>
            <p>
              <em>{book.subtitle}</em>
            </p>
            <p>
              <strong> {book.author} </strong>
            </p>
            <p style={{ padding: 5, color: "yellow", fontSize: "larger" }}>
              {book.price} €
            </p>
            <br />
            <button
              className="button-kosarica-kategorije"
              onClick={() => addToCart(book)}
            >
              add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
