import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
