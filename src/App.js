import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tariffs from "./pages/Tariffs";
import Contacts from "./pages/Contacts";

import {Routes,Route} from "react-router-dom";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tariffs" element={<Tariffs/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
        <Footer />
      </div>

  );
}

export default App;
