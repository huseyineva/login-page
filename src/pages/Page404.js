import React from "react";
import Form from "../components/form/Form";
import "../App.css";
import { Link } from "react-router-dom";
import Transition from "../components/transition/Transition";

function Page404() {
  return (
    <div className="App">
      <h1>Page Not Found!</h1>
      <Form>
        <Link to="/">
          <Transition name="Go To Login!"></Transition>
        </Link>
        <Link to="/Register">
          <Transition name="Don't You Have An Account?"></Transition>
        </Link>
      </Form>
    </div>
  );
}

export default Page404;
