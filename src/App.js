import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Books from "./pages/Books";
import Profile from "./pages/Profile";
import AddBook from "./pages/AddBook";
import MyBooks from "./pages/MyBooks";
import Transactions from "./pages/Transaction";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/book" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="mybooks" element={<MyBooks />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
