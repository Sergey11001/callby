import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="container">
            <AnimatedRoutes />
        </div>
        <Footer />
      </div>

  );
}

export default App;
