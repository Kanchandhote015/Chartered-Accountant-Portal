import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/services"
  element={
    <ProtectedRoute>
      <Services />
    </ProtectedRoute>
  }
/>

<Route
  path="/gallery"
  element={
    <ProtectedRoute>
      <Gallery />
    </ProtectedRoute>
  }
/>

<Route
  path="/news"
  element={
    <ProtectedRoute>
      <News />
    </ProtectedRoute>
  }
/>

<Route
  path="/contact"
  element={
    <ProtectedRoute>
      <Contact />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
