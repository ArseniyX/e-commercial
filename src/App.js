import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/MainRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<Expenses />} /> */}
    </Routes>
  );
}

export default App;
