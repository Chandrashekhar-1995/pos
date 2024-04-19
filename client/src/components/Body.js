import "antd/dist/antd"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";

function Body() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/items" element={<ItemPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default Body;
