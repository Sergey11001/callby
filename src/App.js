import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tariffs from "./pages/Tariffs";
import Contacts from "./pages/Contacts";

import {Routes,Route} from "react-router-dom";
import OurTeam from "./pages/OurTeam";
import Support from "./pages/Support";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tariffs" element={<Tariffs/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/team" element={<OurTeam/>}/>
                <Route path="/contacts/support" element={<Support/>}/>
            </Routes>
        </div>
        <Footer />
      </div>

  );
}

export default App;
