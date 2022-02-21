import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { Home } from "./Component/Home";
import { SearchPage } from "./Component/SearchPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Home/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/page/:id" element={<SearchPage/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}
