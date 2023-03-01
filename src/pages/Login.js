import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Transition from "../components/transition/Transition";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../firebase";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/website", {
        replace: true,
      });
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleClick}>
        <h2>Log</h2>
        <Input
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          placeHolder="E-mail"
        ></Input>
        <Input
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeHolder="Password"
        ></Input>
        <Button type="submit" name="Login" />
        <Link to="/Register">
          <Transition name="Don't You Have An Account?" />
        </Link>
        <Link to="/Passwordreset">
          <Transition name="Forgot Your Password?" />
        </Link>
      </Form>
    </div>
  );
}

export default Login;
