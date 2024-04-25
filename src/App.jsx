import "./App.css";
import Navbar from "./components/MainComponents/Navbar/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <>
    <header>

      <Navbar />
    </header>
      <main id="main">

      <Home />
      </main>
    </>
  );
}

export default App;
