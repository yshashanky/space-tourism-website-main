import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/destination" element={<Destination />} />
//         <Route path="/crew" element={<Crew />} />
//         <Route path="/technology" element={<Technology />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;

const App = () => {
  return (
    <Routes>
      <Route path="/" activeClassName="activeHome" element={<Home />} />
      <Route
        path="/destination"
        activeClassName="activeDestination"
        element={<Destination />}
      />
      <Route path="/crew" activeClassName="activeCrew" element={<Crew />} />
      <Route
        path="/technology"
        activeClassName="activeTechnology"
        element={<Technology />}
      />
      <Route path="*" activeClassName="activeHome" element={<Home />} />
    </Routes>
  );
};

export default App;
