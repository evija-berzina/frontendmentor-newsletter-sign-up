import {Routes, Route} from "react-router-dom";
import {Subscribe} from "./pages/Subscribe";
import {ThankYou} from "./pages/ThankYou";

function App() {
  return (
    <Routes>
      <Route index element={<Subscribe />} />
      <Route path="/ThankYou" element={<ThankYou />} />
    </Routes>
  );
}

export default App
