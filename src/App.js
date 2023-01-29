import React from 'react';
import Footer from './components/shorts/footer/Footer';
import NavbarImg from './components/navbar/navbarimg/NavbarImg';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
      <React.Fragment>
        <NavbarImg />
        <Home/>
        <Footer />
      </React.Fragment>
  )
}

export default App;

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
