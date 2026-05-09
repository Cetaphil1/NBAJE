import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInputPage from "./Components/Profile";
import HomePage from "./Components/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prop" element={<ProfileInputPage />} />
      </Routes>
    </Router>
  );
}
