import { BrowserRouter } from "react-router-dom";
import Header from "@/components/layout/Header";
import HomePage from "@/pages/Home/index";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;