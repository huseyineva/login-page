import { Route, Routes } from "react-router-dom";
import Password from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
import Website from "./pages/Website";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-left" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/website" element={<Website />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Passwordreset" element={<Password />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
