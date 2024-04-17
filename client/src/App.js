import "antd/dist/antd"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/items" element={<ItemPage/>} />
          <Route path="/a" element={<DefaultLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
