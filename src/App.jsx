import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

function App() {
  const helloWorldApi = async () => {
    try {
      if (BACKEND_URL) {
        const response = await axios.get(`${API}/`);
        console.log(response.data.message);
      }
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
