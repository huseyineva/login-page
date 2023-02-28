import Form from "../components/form/Form";
import "../App.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Transition from "../components/transition/Transition";
import { useState } from "react";
import { resetPassword } from "../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = await resetPassword(email);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleClick}>
        <h2>Reset Your Password</h2>
        <Input
          type={"email"}
          placeHolder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Button onClick={handleClick} name="Send" />
        <Link to="/">
          <Transition name="Go To Login!" />
        </Link>
      </Form>
    </div>
  );
}

export default ForgotPassword;
