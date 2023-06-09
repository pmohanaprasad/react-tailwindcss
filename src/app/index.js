import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./containers/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
