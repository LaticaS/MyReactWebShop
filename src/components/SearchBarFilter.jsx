import React, { useState } from "react";
import data from "./databooks.json";
import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchBarFilter() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form>
        <InputGroup className="my-3">
          <Form.Control
            className="mx-3 py-3 l-6"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </InputGroup>
      </Form>
      <ul style={{ listStyle: "none" }}>
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? null
              : item.title.toLowerCase().includes(search) ||
                  item.author.toLowerCase().includes(search);
          })
          .map((item) => (
            <li
              key={item.id}
              style={{
                background: "white",
                margin: 0,
                paddingBottom: 2,
                paddingTop: 2,
              }}
            >
              <Link to={`/product/${item.id}`} title="Klikni za detaljnije">
                <img
                  src={item.img}
                  alt={item.title}
                  title={item.title}
                  style={{ maxWidth: "80px", margin: 5 }}
                />
                {item.title} / {item.author}
                <hr />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default SearchBarFilter;
