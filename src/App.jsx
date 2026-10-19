import { BrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
