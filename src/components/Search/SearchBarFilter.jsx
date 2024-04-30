import React, { useState } from "react";
import data from "../databooks.json";
import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Search.scss";

function SearchBarFilter() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Pretraga 〱</h1>
      <div className="pretraga-wrapper">
        <Form>
          <InputGroup className="my-3 input-pretraga">
            <Form.Control
              className="py-3 l-6"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </InputGroup>
        </Form>
        <h3>Rezultati pretrage za: "{search}" </h3>
        <br />
        <ul className="ul-pretraga">
          {data
            .filter((item) => {
              //konverzija u mala slova, a onda includes tako da radi za mala i velika slova
              const searchLower = search.toLowerCase();
              const titleLower = item.title.toLowerCase();
              const authorLower = item.author.toLowerCase();
              const categoryLower = item.category.toLowerCase();

              return search === ""
                ? item
                : titleLower.includes(searchLower) ||
                    authorLower.includes(searchLower) ||
                    categoryLower.includes(searchLower);
            })
            .map((item) => (
              <li className="li-pretraga" key={item.id}>
                <Link
                  to={`/product/${item.id}`}
                  title="Klikni za detaljnije"
                  className="link-pretraga"
                >
                  <img
                    className="img-pretraga"
                    src={item.img}
                    alt={item.title}
                    title="Detaljnije"
                  />
                  {item.title} / {item.author}
                  <hr />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBarFilter;
