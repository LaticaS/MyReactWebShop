import React, { useState } from "react";
import data from "./databooks.json";
import { InputGroup, Form } from "react-bootstrap";

function SearchBarFilter() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form>
        <InputGroup className="my-3">
          <Form.Control
            className="mx-3 py-3"
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
            <li key={item.id}>
              {item.title} / {item.author}
            </li>
          ))}
      </ul>
    </>
  );
}

export default SearchBarFilter;
