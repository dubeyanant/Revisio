import { Routes, Route } from "react-router-dom";
import Success from "./success";
import Login from "./login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
