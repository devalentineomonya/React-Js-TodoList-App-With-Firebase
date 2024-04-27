import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/MainComponents/Navbar/Navbar";

import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { TaskProvider } from "./Context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <header>
        <Navbar />
      </header>
      <main id="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </main>
    </TaskProvider>
  );
}

export default App;
