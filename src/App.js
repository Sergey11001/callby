import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tariffs from "./pages/Tariffs";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Home />
          {/*  <Tariffs />*/}
        </div>
        <Footer />
      </div>

  );
}

export default App;
