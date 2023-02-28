import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Transition from "../components/transition/Transition";
import { register } from "../firebase";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleClick}>
        <h2>Register</h2>
        <Input
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          placeHolder={"E-mail"}
        ></Input>
        <Input
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeHolder={"Password"}
        ></Input>
        <Button onClick={handleClick} name="Register" />
        <Link to="/">
          <Transition name="Go to Login!"></Transition>
        </Link>
      </Form>
    </div>
  );
}

export default Register;
