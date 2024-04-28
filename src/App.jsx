import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/MainComponents/Navbar/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/Loginpage";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { TaskProvider } from "./Context/TaskContext";
import { useContext } from "react"; 
import AuthContext from "./Context/AuthContext";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <TaskProvider>
      <header>
        <Navbar />
      </header>

      <main id="main">
        <BrowserRouter>
          <Routes>
            {!loggedIn ? (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </main>
    </TaskProvider>
  );
}

export default App;
