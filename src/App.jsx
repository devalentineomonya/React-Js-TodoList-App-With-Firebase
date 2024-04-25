import "./App.css";
import Navbar from "./components/MainComponents/Navbar/Navbar";

import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <main id="main">
<Loginpage/>
      {/* <Home /> */}
      </main>
    </>
  );
}

export default App;
