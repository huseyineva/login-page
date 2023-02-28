import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { logout as logoutHandle } from "../store/auth";
import { logout } from "../firebase";
import { useDispatch } from "react-redux";

function Website() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="App">
      <h2>Hello My Website!</h2>
      <Button type="submit" onClick={handleLogout}>
        Sign Out!
      </Button>
      ;
    </div>
  );
}

export default Website;
