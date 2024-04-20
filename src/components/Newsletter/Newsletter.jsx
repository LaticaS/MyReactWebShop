import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Newsletter.scss";
import { useEffect, useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(0);
  const [form, setForm] = useState(true);

  function handleChange(e) {
    setEmail(e.target.value);
    setValid(0);
  }
  function backToForm() {
    setEmail("");
    setValid(0);
    setForm(true);
  }
  function checkEmail() {
    const regex =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if (email == "") {
      setValid(1);
    } else if (regex.test(email) || email === "test") {
      setForm(false);
    } else {
      setValid(2);
    }
  }

  const validation =
    valid == 0
      ? ""
      : valid == 1
      ? "The field is left empty"
      : valid == 2
      ? "The email address is invalid"
      : null;

  return (
    <>
      {form ? (
        <div className="newsletter-wrapper">
          <h3>Pratite naše akcije i ponude</h3>
          <h4>Newsletter</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                id="email"
                value={email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="email@company.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control type="text" placeholder="Ime i prezime" />
            </Form.Group>
            <Button
              className="newsletter-dugme"
              type="submit"
              onClick={() => checkEmail()}
            >
              Potvrđujem prijavu
            </Button>
          </Form>
        </div>
      ) : (
        <div className="newsletter-wrapper">
          <h3>Hvala na prijavi za naš Newsletter!</h3>
          <p className="text-warning">
            Email potvrde je poslan na <span>{email}</span>.
          </p>
          <Button onClick={() => backToForm()} className="btn-dismiss">
            Zatvori poruku
          </Button>
        </div>
      )}
    </>
  );
}

export default Newsletter;
