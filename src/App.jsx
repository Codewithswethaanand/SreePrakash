import {
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import MobileBottomNav from "./components/layout/MobileBottomNav";

import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App(){

return(

<>

<Navbar />

<main className="pb-20 lg:pb-0">
 <Routes>

      <Route path="/" element={<Home />} />

 </Routes>

</main>

<MobileBottomNav />
<Footer />

</>

)

}


export default App;