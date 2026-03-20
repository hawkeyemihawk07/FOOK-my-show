import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Details from "/src/components/Details";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
